using AKS.Shared.Commons.Models;
using AKS.Shared.Commons.Models.Accounts;
using AKS.Shared.Commons.Ops;
using AKS.Shared.Templets.Helpers;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using System.Data;

namespace AKS.AccountingSystem.Reports
{
    internal class RowData
    {
        public string Name1 { get; set; }
        public string Name2 { get; set; }
        public string Value1 { get; set; }
        public string Value2 { get; set; }
    }
    public class PettyCashReport
    {
        private CashDetail cashDetail;
        private PettyCashSheet pcs;

        public string GeneratePdf(PettyCashSheet p, CashDetail cd)
        {
            pcs = p; cashDetail = cd;
            try
            {
                //Create a new PDF document.
                PdfDocument document = new PdfDocument();

                //Adds page settings
                document.PageSettings.Orientation = PdfPageOrientation.Portrait;
                document.PageSettings.Margins.All = 50;

                PdfPage pdfPage = document.Pages.Add();
                // GenerateFirstPage(pdfPage);
                PdfPage pdfPage2 = document.Pages.Add();
                GenerateCarbonPage(pdfPage, pdfPage2);

                //Save the document.
                //document.Save("Output.pdf");

                //Close the document.
               // document.Close(true);
               // return "Output.pdf";

                Directory.CreateDirectory($@"d:\{CurrentSession.StoreCode}\PettyCashSheet\{p.OnDate.Year}\{p.OnDate.Month}\");
                using FileStream fileStream = new FileStream($@"d:\{CurrentSession.StoreCode}\PettyCashSheet\{p.OnDate.Year}\{p.OnDate.Month}\PettyCashSheet_{p.OnDate.Day}.pdf", FileMode.Create, FileAccess.Write);
                document.Save(fileStream);
                //Close the document.
                document.Close(true);
                fileStream.Close();
                return fileStream.Name;
                
            }
            catch (Exception e)
            {
                LogWrite.LogError(e.Message);
                return null;
            }
        }

        public string GenReport(List<PettyCashSheet> pcsList)
        {
            return GeneratePdfWithMultiple(pcsList);
        }


        private PdfPage GenerateCarbonPage(PdfPage page, PdfPage cPage)
        {
            //Add a page to the document.
            //PdfPage page = document.Pages.Add();

            //Create PDF graphics for the page.
            PdfGraphics graphics = page.Graphics;

            //Carbon Copy
            PdfGraphics cGraphics = cPage.Graphics;

            //Set the standard font.
            PdfFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);

            //Draw the text.
            graphics.DrawString("Petty Cash Sheet", font, PdfBrushes.Red, new PointF(page.Graphics.ClientSize.Width / 3, 0));
            cGraphics.DrawString("Petty Cash Sheet", font, PdfBrushes.Red, new PointF(cPage.Graphics.ClientSize.Width / 3, 0));
            cGraphics.DrawString("( Duplicate )", new PdfStandardFont(PdfFontFamily.TimesRoman, 11), PdfBrushes.Brown,
                new PointF(cPage.Graphics.ClientSize.Width - 70, 0));

            PdfLayoutResult result = new PdfLayoutResult(page, new RectangleF(0, 0, page.Graphics.ClientSize.Width / 2, 0));
            PdfLayoutResult resultCarbon = new PdfLayoutResult(cPage, new RectangleF(0, 0, cPage.Graphics.ClientSize.Width / 2, 0));

            PdfFont subHeadingFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 14);

            //Draw Rectangle place on location
            graphics.DrawRectangle(new PdfSolidBrush(new PdfColor(126, 151, 173)), new RectangleF(0, result.Bounds.Bottom + 20, graphics.ClientSize.Width, 30));
            cGraphics.DrawRectangle(new PdfSolidBrush(new PdfColor(126, 151, 173)), new RectangleF(0, resultCarbon.Bounds.Bottom + 20, cGraphics.ClientSize.Width, 30));

            var element = new PdfTextElement("Aprajita Retails \t" + pcs.Id, subHeadingFont);
            element.Brush = PdfBrushes.White;
            result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 28));
            resultCarbon = element.Draw(cPage, new PointF(10, resultCarbon.Bounds.Bottom + 28));

            string currentDate = "On: " + DateTime.Now.ToString("MM/dd/yyyy");
            SizeF textSize = subHeadingFont.MeasureString(currentDate);

            graphics.DrawString(currentDate, subHeadingFont, element.Brush, new PointF(graphics.ClientSize.Width - textSize.Width - 10, result.Bounds.Y));
            cGraphics.DrawString(currentDate, subHeadingFont, element.Brush, new PointF(cGraphics.ClientSize.Width - textSize.Width - 10, resultCarbon.Bounds.Y));

            //Draw Bill header
            element = new PdfTextElement("Petty Cash Sheet ", new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
            element.Brush = new PdfSolidBrush(new PdfColor(126, 155, 203));
            result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 10));
            resultCarbon = element.Draw(cPage, new PointF(10, resultCarbon.Bounds.Bottom + 10));

            //Draw Bill address
            element = new PdfTextElement(string.Format("{0}, {1}, {2}", $"Date: {pcs.OnDate.ToString("dd/MM/yyyy")} ",
                $"\t\tSN: {pcs.Id} ", " Dumka, Jharkhand"), new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
            element.Brush = new PdfSolidBrush(new PdfColor(89, 89, 93));
            result = element.Draw(page, new RectangleF(10, result.Bounds.Bottom + 3, graphics.ClientSize.Width / 2, 100));
            resultCarbon = element.Draw(cPage, new RectangleF(10, resultCarbon.Bounds.Bottom + 3, cGraphics.ClientSize.Width / 2, 100));

            //Draw Bill line
            graphics.DrawLine(new PdfPen(new PdfColor(126, 151, 173), 0.70f), new PointF(0, result.Bounds.Bottom + 3), new PointF(graphics.ClientSize.Width, result.Bounds.Bottom + 3));
            cGraphics.DrawLine(new PdfPen(new PdfColor(126, 151, 173), 0.70f), new PointF(0, resultCarbon.Bounds.Bottom + 3), new PointF(cGraphics.ClientSize.Width, result.Bounds.Bottom + 3));

            // Adding Table part

            //Create a PdfGrid
            PdfGrid pdfGrid = new PdfGrid();

            int rI = 0, dI = 0;

            //Assign data source
            pdfGrid.DataSource = ToDataTable(out rI, out dI);

            //Creates the grid cell styles
            PdfGridCellStyle cellStyle = new PdfGridCellStyle();
            cellStyle.Borders.All = PdfPens.White;
            PdfGridRow header = pdfGrid.Headers[0];

            //Creates the header style
            PdfGridCellStyle headerStyle = new PdfGridCellStyle();
            headerStyle.Borders.All = new PdfPen(new PdfColor(126, 151, 173));
            headerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(126, 151, 173)); ;
            headerStyle.TextBrush = PdfBrushes.White;
            headerStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 14f, PdfFontStyle.Bold);

            //Adds cell customizations
            for (int i = 0; i < header.Cells.Count; i++)
            {
                if (i == 0 || i == 2)
                    header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
                else
                    header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle);
            }

            //Applies the header style
            header.ApplyStyle(headerStyle);

            cellStyle.Borders.Bottom = new PdfPen(new PdfColor(217, 217, 217), 0.70f);
            cellStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 12f);
            cellStyle.TextBrush = new PdfSolidBrush(new PdfColor(131, 130, 136));

            //Creates the layout format for grid
            PdfGridLayoutFormat layoutFormat = new PdfGridLayoutFormat();

            // Creates layout format settings to allow the table pagination
            layoutFormat.Layout = PdfLayoutType.Paginate;

            PdfGridRow lastRow = pdfGrid.Rows[pdfGrid.Rows.Count - 1];

            PdfGridCellStyle firstRowStyle = new PdfGridCellStyle();
            firstRowStyle.TextBrush = PdfBrushes.OrangeRed;
            firstRowStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 10f, PdfFontStyle.Bold);
            pdfGrid.Rows[0].ApplyStyle(firstRowStyle);

            PdfGridCellStyle totalRowStyle = new PdfGridCellStyle();
            totalRowStyle.TextBrush = PdfBrushes.DarkBlue;
            totalRowStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 10f, PdfFontStyle.Bold);

            if (dI > 0) pdfGrid.Rows[dI].ApplyStyle(totalRowStyle);
            if (rI > 0) pdfGrid.Rows[rI].ApplyStyle(totalRowStyle);
            //pdfGrid.Rows[5].ApplyStyle(firstRowStyle);

            PdfGridCellStyle footerStyle = new PdfGridCellStyle();
            footerStyle.Borders.All = new PdfPen(new PdfColor(Color.MediumPurple));
            footerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(Color.LightGray)); ;
            footerStyle.TextBrush = PdfBrushes.Red;
            footerStyle.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 13f, PdfFontStyle.Italic);
            lastRow.ApplyStyle(footerStyle);

            //Draws the grid to the PDF page.
            PdfGridLayoutResult gridResult = pdfGrid.Draw(page,
                new RectangleF(
                    new PointF(0, result.Bounds.Bottom + 10),
                    new SizeF(graphics.ClientSize.Width, graphics.ClientSize.Height - 100)), layoutFormat);

            //Draws the grid to the PDF page.
            PdfGridLayoutResult gridResultCarbon = pdfGrid.Draw(cPage,
                new RectangleF(
                    new PointF(0, resultCarbon.Bounds.Bottom + 10),
                    new SizeF(cGraphics.ClientSize.Width, cGraphics.ClientSize.Height - 100)), layoutFormat);

            //Draw Bill line Page Break Line
            graphics.DrawLine(new PdfPen(new PdfColor(Color.DarkBlue)), new PointF(0, gridResult.Bounds.Bottom + 20), new PointF(graphics.ClientSize.Width, gridResult.Bounds.Bottom + 20));
            cGraphics.DrawLine(new PdfPen(new PdfColor(Color.DarkBlue)), new PointF(0, gridResultCarbon.Bounds.Bottom + 20), new PointF(cGraphics.ClientSize.Width, gridResultCarbon.Bounds.Bottom + 20));

            //Adding  Cash Details
            PdfGrid pdfCashGrid = new PdfGrid();
            pdfCashGrid.DataSource = ToCashTable();
            if (pdfCashGrid.DataSource != null)
            {
                //Applies the header style
                pdfCashGrid.Headers[0].ApplyStyle(headerStyle);
                pdfCashGrid.Rows[pdfCashGrid.Rows.Count - 1].ApplyStyle(footerStyle);

                //Draw the text.
                graphics.DrawString("Cash Details", font, PdfBrushes.DarkMagenta, new PointF(page.Graphics.ClientSize.Width / 3, gridResult.Bounds.Bottom + 30));
                cGraphics.DrawString("Cash Details", font, PdfBrushes.DarkMagenta, new PointF(cPage.Graphics.ClientSize.Width / 3, gridResultCarbon.Bounds.Bottom + 30));

                //Draws the grid to the PDF page.
                PdfGridLayoutResult gridCashResult = pdfCashGrid.Draw(page,
                    new RectangleF(
                        new PointF(0, gridResult.Bounds.Bottom + 55),
                        new SizeF(graphics.ClientSize.Width, graphics.ClientSize.Height - 100)), layoutFormat);

                //Draws the grid to the PDF page.
                PdfGridLayoutResult gridCashResultCarbon = pdfCashGrid.Draw(cPage,
                    new RectangleF(
                        new PointF(0, gridResultCarbon.Bounds.Bottom + 55),
                        new SizeF(cGraphics.ClientSize.Width, cGraphics.ClientSize.Height - 100)), layoutFormat);

                //Draw the text. //TODO: in case of flowing to next page use in section
                graphics.DrawString("   Sign StoreManager                                                                     Sign Accountant           ",
                    new PdfStandardFont(PdfFontFamily.TimesRoman, 12), PdfBrushes.Blue, new PointF(page.Graphics.ClientSize.Width / 8, gridCashResult.Bounds.Bottom + 130));
                //Draw the text. //TODO: in case of flowing to next page use in section
                cGraphics.DrawString("   Sign StoreManager                                                                     Sign Accountant           ",
                    new PdfStandardFont(PdfFontFamily.TimesRoman, 12), PdfBrushes.Blue, new PointF(cPage.Graphics.ClientSize.Width / 8, gridCashResultCarbon.Bounds.Bottom + 130));
            }

            return page;
        }

        private PdfPage GenerateFirstPage(PdfPage page)
        {
            //Add a page to the document.
            //PdfPage page = document.Pages.Add();
            //Create PDF graphics for the page.
            PdfGraphics graphics = page.Graphics;
            //Set the standard font.
            PdfFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);
            //Draw the text.
            graphics.DrawString("Petty Cash Sheet", font, PdfBrushes.Red, new PointF(page.Graphics.ClientSize.Width / 2, 0));

            PdfLayoutResult result = new PdfLayoutResult(page, new RectangleF(0, 0, page.Graphics.ClientSize.Width / 2, 0));
            PdfFont subHeadingFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 14);

            //Draw Rectangle place on location
            graphics.DrawRectangle(new PdfSolidBrush(new PdfColor(126, 151, 173)), new RectangleF(0, result.Bounds.Bottom + 20, graphics.ClientSize.Width, 30));
            var element = new PdfTextElement("Aprajita Retails \t" + pcs.Id, subHeadingFont);
            element.Brush = PdfBrushes.White;
            result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 28));

            string currentDate = "On: " + DateTime.Now.ToString("MM/dd/yyyy");
            SizeF textSize = subHeadingFont.MeasureString(currentDate);
            graphics.DrawString(currentDate, subHeadingFont, element.Brush, new PointF(graphics.ClientSize.Width - textSize.Width - 10, result.Bounds.Y));

            //Draw Bill header
            element = new PdfTextElement("Petty Cash Sheet ", new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
            element.Brush = new PdfSolidBrush(new PdfColor(126, 155, 203));
            result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 10));

            //Draw Bill address
            element = new PdfTextElement(string.Format("{0}, {1}, {2}", $"Date: {pcs.OnDate.ToString("dd/MM/yyyy")} ",
                $"\t\tSN: {pcs.Id} ", " Dumka, Jharkhand"), new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
            element.Brush = new PdfSolidBrush(new PdfColor(89, 89, 93));
            result = element.Draw(page, new RectangleF(10, result.Bounds.Bottom + 3, graphics.ClientSize.Width / 2, 100));

            //Draw Bill line
            graphics.DrawLine(new PdfPen(new PdfColor(126, 151, 173), 0.70f), new PointF(0, result.Bounds.Bottom + 3), new PointF(graphics.ClientSize.Width, result.Bounds.Bottom + 3));

            // Adding Table part

            //Create a PdfGrid
            PdfGrid pdfGrid = new PdfGrid();

            int rI = 0, dI = 0;

            //Assign data source
            pdfGrid.DataSource = ToDataTable(out rI, out dI);
            //Creates the grid cell styles
            PdfGridCellStyle cellStyle = new PdfGridCellStyle();
            cellStyle.Borders.All = PdfPens.White;
            PdfGridRow header = pdfGrid.Headers[0];

            //Creates the header style
            PdfGridCellStyle headerStyle = new PdfGridCellStyle();
            headerStyle.Borders.All = new PdfPen(new PdfColor(126, 151, 173));
            headerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(126, 151, 173)); ;
            headerStyle.TextBrush = PdfBrushes.White;
            headerStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 14f, PdfFontStyle.Bold);

            //Adds cell customizations
            for (int i = 0; i < header.Cells.Count; i++)
            {
                if (i == 0 || i == 2)
                    header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
                else
                    header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle);
            }

            //Applies the header style
            header.ApplyStyle(headerStyle);

            cellStyle.Borders.Bottom = new PdfPen(new PdfColor(217, 217, 217), 0.70f);
            cellStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 12f);
            cellStyle.TextBrush = new PdfSolidBrush(new PdfColor(131, 130, 136));

            //Creates the layout format for grid
            PdfGridLayoutFormat layoutFormat = new PdfGridLayoutFormat();

            // Creates layout format settings to allow the table pagination
            layoutFormat.Layout = PdfLayoutType.Paginate;

            PdfGridRow lastRow = pdfGrid.Rows[pdfGrid.Rows.Count - 1];

            PdfGridCellStyle firstRowStyle = new PdfGridCellStyle();
            firstRowStyle.TextBrush = PdfBrushes.OrangeRed;
            firstRowStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 10f, PdfFontStyle.Bold);
            pdfGrid.Rows[0].ApplyStyle(firstRowStyle);

            PdfGridCellStyle totalRowStyle = new PdfGridCellStyle();
            totalRowStyle.TextBrush = PdfBrushes.DarkBlue;
            totalRowStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 10f, PdfFontStyle.Bold);

            if (dI > 0) pdfGrid.Rows[dI].ApplyStyle(totalRowStyle);
            if (rI > 0) pdfGrid.Rows[rI].ApplyStyle(totalRowStyle);
            //pdfGrid.Rows[5].ApplyStyle(firstRowStyle);

            PdfGridCellStyle footerStyle = new PdfGridCellStyle();
            footerStyle.Borders.All = new PdfPen(new PdfColor(Color.MediumPurple));
            footerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(Color.LightGray)); ;
            footerStyle.TextBrush = PdfBrushes.Red;
            footerStyle.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 13f, PdfFontStyle.Italic);
            lastRow.ApplyStyle(footerStyle);

            //Draws the grid to the PDF page.
            PdfGridLayoutResult gridResult = pdfGrid.Draw(page,
                new RectangleF(
                    new PointF(0, result.Bounds.Bottom + 10),
                    new SizeF(graphics.ClientSize.Width, graphics.ClientSize.Height - 100)), layoutFormat);

            //Draw Bill line Page Break Line
            graphics.DrawLine(new PdfPen(new PdfColor(Color.DarkBlue)), new PointF(0, gridResult.Bounds.Bottom + 20), new PointF(graphics.ClientSize.Width, gridResult.Bounds.Bottom + 20));

            //Adding  Cash Details
            PdfGrid pdfCashGrid = new PdfGrid();
            pdfCashGrid.DataSource = ToCashTable();
            //Applies the header style
            pdfCashGrid.Headers[0].ApplyStyle(headerStyle);
            pdfCashGrid.Rows[pdfCashGrid.Rows.Count - 1].ApplyStyle(footerStyle);

            //Draw the text.
            graphics.DrawString("Cash Details", font, PdfBrushes.DarkMagenta, new PointF(page.Graphics.ClientSize.Width / 3, gridResult.Bounds.Bottom + 30));

            //Draws the grid to the PDF page.
            PdfGridLayoutResult gridCashResult = pdfCashGrid.Draw(page,
                new RectangleF(
                    new PointF(0, gridResult.Bounds.Bottom + 55),
                    new SizeF(graphics.ClientSize.Width, graphics.ClientSize.Height - 100)), layoutFormat);

            //Draw the text. //TODO: in case of flowing to next page use in section
            graphics.DrawString("   Sign StoreManager                                                                     Sign Accountant           ",
                new PdfStandardFont(PdfFontFamily.TimesRoman, 12), PdfBrushes.Blue, new PointF(page.Graphics.ClientSize.Width / 8, gridCashResult.Bounds.Bottom + 130));

            return page;
        }

        private PdfGridLayoutResult GenerateFirstPettyCashSheet(PettyCashSheet pcs1, PdfPage page)
        {
            this.pcs = pcs1;

            PdfGraphics graphics = page.Graphics;
            //Set the standard font.
            PdfFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);

            //Draw the text.
            graphics.DrawString("Petty Cash Sheet", font, PdfBrushes.Red, new PointF(page.Graphics.ClientSize.Width / 2, 0));

            PdfLayoutResult result = new PdfLayoutResult(page, new RectangleF(0, 0, page.Graphics.ClientSize.Width / 2, 0));
            PdfFont subHeadingFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 14);

            //Draw Rectangle place on location
            graphics.DrawRectangle(new PdfSolidBrush(new PdfColor(126, 151, 173)), new RectangleF(0, result.Bounds.Bottom + 20, graphics.ClientSize.Width, 30));
            var element = new PdfTextElement("Aprajita Retails \t" + pcs.Id, subHeadingFont);
            element.Brush = PdfBrushes.White;
            result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 28));

            string currentDate = "On: " + DateTime.Now.ToString("MM/dd/yyyy");
            SizeF textSize = subHeadingFont.MeasureString(currentDate);
            graphics.DrawString(currentDate, subHeadingFont, element.Brush, new PointF(graphics.ClientSize.Width - textSize.Width - 10, result.Bounds.Y));

            //Draw Bill header
            element = new PdfTextElement("Petty Cash Sheet ", new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
            element.Brush = new PdfSolidBrush(new PdfColor(126, 155, 203));
            result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 10));

            //Draw Bill address
            element = new PdfTextElement(string.Format("{0}, {1}, {2}", $"Date: {pcs.OnDate.ToString("dd/MM/yyyy")} ",
                $"\t\tSN: {pcs.Id} ", " Dumka, Jharkhand"), new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
            element.Brush = new PdfSolidBrush(new PdfColor(89, 89, 93));
            result = element.Draw(page, new RectangleF(10, result.Bounds.Bottom + 3, graphics.ClientSize.Width / 2, 100));

            //Draw Bill line
            graphics.DrawLine(new PdfPen(new PdfColor(126, 151, 173), 0.70f), new PointF(0, result.Bounds.Bottom + 3), new PointF(graphics.ClientSize.Width, result.Bounds.Bottom + 3));

            // Adding Table part

            //Create a PdfGrid
            PdfGrid pdfGrid = new PdfGrid();

            int rI = 0, dI = 0;

            //Assign data source
            pdfGrid.DataSource = ToDataTable(out rI, out dI);
            //Creates the grid cell styles
            PdfGridCellStyle cellStyle = new PdfGridCellStyle();
            cellStyle.Borders.All = PdfPens.White;
            cellStyle.StringFormat = new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle);
            PdfGridRow header = pdfGrid.Headers[0];

            //Creates the header style
            PdfGridCellStyle headerStyle = new PdfGridCellStyle();
            headerStyle.Borders.All = new PdfPen(new PdfColor(126, 151, 173));
            headerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(126, 151, 173)); ;
            headerStyle.TextBrush = PdfBrushes.White;
            headerStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 14f, PdfFontStyle.Bold);

            //Adds cell customizations
            for (int i = 0; i < header.Cells.Count; i++)
            {
                if (i == 0 || i == 2)
                    header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
                else
                    header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle);
            }

            //Applies the header style
            header.ApplyStyle(headerStyle);

            cellStyle.Borders.Bottom = new PdfPen(new PdfColor(217, 217, 217), 0.70f);
            cellStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 12f);
            cellStyle.TextBrush = new PdfSolidBrush(new PdfColor(131, 130, 136));

            //Creates the layout format for grid
            PdfGridLayoutFormat layoutFormat = new PdfGridLayoutFormat();

            // Creates layout format settings to allow the table pagination
            layoutFormat.Layout = PdfLayoutType.Paginate;

            PdfGridRow lastRow = pdfGrid.Rows[pdfGrid.Rows.Count - 1];

            PdfGridCellStyle firstRowStyle = new PdfGridCellStyle();
            firstRowStyle.TextBrush = PdfBrushes.OrangeRed;
            firstRowStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 10f, PdfFontStyle.Bold);
            pdfGrid.Rows[0].ApplyStyle(firstRowStyle);

            PdfGridCellStyle totalRowStyle = new PdfGridCellStyle();
            totalRowStyle.TextBrush = PdfBrushes.DarkBlue;
            totalRowStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 10f, PdfFontStyle.Bold);

            if (dI > 0) pdfGrid.Rows[dI].ApplyStyle(totalRowStyle);
            if (rI > 0) pdfGrid.Rows[rI].ApplyStyle(totalRowStyle);
            //pdfGrid.Rows[5].ApplyStyle(firstRowStyle);

            PdfGridCellStyle footerStyle = new PdfGridCellStyle();
            footerStyle.Borders.All = new PdfPen(new PdfColor(Color.MediumPurple));
            footerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(Color.LightGray)); ;
            footerStyle.TextBrush = PdfBrushes.Red;
            footerStyle.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 13f, PdfFontStyle.Italic);
            lastRow.ApplyStyle(footerStyle);

            //Draws the grid to the PDF page.
            PdfGridLayoutResult gridResult = pdfGrid.Draw(page,
                new RectangleF(
                    new PointF(0, result.Bounds.Bottom + 10),
                    new SizeF(graphics.ClientSize.Width, graphics.ClientSize.Height - 100)), layoutFormat);
            //Draw Bill line Page Break Line
            graphics.DrawLine(new PdfPen(new PdfColor(Color.DarkBlue)), new PointF(0, gridResult.Bounds.Bottom + 20), new PointF(graphics.ClientSize.Width, gridResult.Bounds.Bottom + 20));
            return gridResult;
        }

        private PdfPage GenerateLastPettyCashSheet(PettyCashSheet pcs2, PdfPage page, PdfGridLayoutResult oldGridResult)
        {
            this.pcs = pcs2;
            PdfGraphics graphics = page.Graphics;
            PdfLayoutResult result = new PdfLayoutResult(page, new RectangleF(0, oldGridResult.Bounds.Bottom + 30, page.Graphics.ClientSize.Width / 2, 0));
            PdfFont subHeadingFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 14);

            //Draw Rectangle place on location
            graphics.DrawRectangle(new PdfSolidBrush(new PdfColor(126, 151, 173)), new RectangleF(0, result.Bounds.Bottom + 20, graphics.ClientSize.Width, 30));
            var element = new PdfTextElement("Aprajita Retails \t" + pcs.Id, subHeadingFont);
            element.Brush = PdfBrushes.White;
            result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 28));

            string currentDate = "On: " + DateTime.Now.ToString("MM/dd/yyyy");
            SizeF textSize = subHeadingFont.MeasureString(currentDate);
            graphics.DrawString(currentDate, subHeadingFont, element.Brush, new PointF(graphics.ClientSize.Width - textSize.Width - 10, result.Bounds.Y));

            //Draw Bill header
            element = new PdfTextElement("Petty Cash Sheet ", new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
            element.Brush = new PdfSolidBrush(new PdfColor(126, 155, 203));
            result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 10));

            //Draw Bill address
            element = new PdfTextElement(string.Format("{0}, {1}, {2}", $"Date: {pcs.OnDate.ToString("dd/MM/yyyy")} ",
                $"\t\tSN: {pcs.Id} ", " Dumka, Jharkhand"), new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
            element.Brush = new PdfSolidBrush(new PdfColor(89, 89, 93));
            result = element.Draw(page, new RectangleF(10, result.Bounds.Bottom + 3, graphics.ClientSize.Width / 2, 100));

            //Draw Bill line
            graphics.DrawLine(new PdfPen(new PdfColor(126, 151, 173), 0.70f), new PointF(0, result.Bounds.Bottom + 3), new PointF(graphics.ClientSize.Width, result.Bounds.Bottom + 3));

            // Adding Table part

            //Create a PdfGrid
            PdfGrid pdfGrid = new PdfGrid();

            int rI = 0, dI = 0;

            //Assign data source
            pdfGrid.DataSource = ToDataTable(out rI, out dI);
            //Creates the grid cell styles
            PdfGridCellStyle cellStyle = new PdfGridCellStyle();
            cellStyle.Borders.All = PdfPens.White;
            PdfGridRow header = pdfGrid.Headers[0];

            //Creates the header style
            PdfGridCellStyle headerStyle = new PdfGridCellStyle();
            headerStyle.Borders.All = new PdfPen(new PdfColor(126, 151, 173));
            headerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(126, 151, 173)); ;
            headerStyle.TextBrush = PdfBrushes.White;
            headerStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 14f, PdfFontStyle.Bold);

            //Adds cell customizations
            for (int i = 0; i < header.Cells.Count; i++)
            {
                if (i == 0 || i == 2)
                    header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
                else
                    header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle);
            }

            //Applies the header style
            header.ApplyStyle(headerStyle);

            cellStyle.Borders.Bottom = new PdfPen(new PdfColor(217, 217, 217), 0.70f);
            cellStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 12f);
            cellStyle.TextBrush = new PdfSolidBrush(new PdfColor(131, 130, 136));

            //Creates the layout format for grid
            PdfGridLayoutFormat layoutFormat = new PdfGridLayoutFormat();

            // Creates layout format settings to allow the table pagination
            layoutFormat.Layout = PdfLayoutType.Paginate;

            PdfGridRow lastRow = pdfGrid.Rows[pdfGrid.Rows.Count - 1];

            PdfGridCellStyle firstRowStyle = new PdfGridCellStyle();
            firstRowStyle.TextBrush = PdfBrushes.OrangeRed;
            firstRowStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 10f, PdfFontStyle.Bold);
            pdfGrid.Rows[0].ApplyStyle(firstRowStyle);

            PdfGridCellStyle totalRowStyle = new PdfGridCellStyle();
            totalRowStyle.TextBrush = PdfBrushes.DarkBlue;
            totalRowStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 10f, PdfFontStyle.Bold);

            if (dI > 0) pdfGrid.Rows[dI].ApplyStyle(totalRowStyle);
            if (rI > 0) pdfGrid.Rows[rI].ApplyStyle(totalRowStyle);
            //pdfGrid.Rows[5].ApplyStyle(firstRowStyle);

            PdfGridCellStyle footerStyle = new PdfGridCellStyle();
            footerStyle.Borders.All = new PdfPen(new PdfColor(Color.MediumPurple));
            footerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(Color.LightGray)); ;
            footerStyle.TextBrush = PdfBrushes.Red;
            footerStyle.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 13f, PdfFontStyle.Italic);
            lastRow.ApplyStyle(footerStyle);

            //Draws the grid to the PDF page.
            PdfGridLayoutResult gridResult = pdfGrid.Draw(page,
                new RectangleF(
                    new PointF(0, result.Bounds.Bottom + 10),
                    new SizeF(graphics.ClientSize.Width, graphics.ClientSize.Height - 100)), layoutFormat);
            //Draw Bill line Page Break Line
            graphics.DrawLine(new PdfPen(new PdfColor(Color.DarkBlue)), new PointF(0, gridResult.Bounds.Bottom + 20), new PointF(graphics.ClientSize.Width, gridResult.Bounds.Bottom + 20));
            return page;
        }

        private string GeneratePdfWithMultiple(List<PettyCashSheet> pList)
        {
            try
            {
                //Create a new PDF document.
                PdfDocument document = new PdfDocument();
                //Adds page settings
                document.PageSettings.Orientation = PdfPageOrientation.Portrait;
                document.PageSettings.Margins.All = 50;
                int pageCount = 1 + (pList.Count / 2);
                List<PdfPage> pages = new List<PdfPage>();
                for (int i = 0; i < pageCount; i++)
                    pages.Add(document.Pages.Add());

                int pageNo = 0;
                for (int i = 0; i < pList.Count; i++)
                {
                    var result = GenerateFirstPettyCashSheet(pList[i], pages[pageNo]);
                    i++;
                    if (i < pList.Count)
                    {
                        GenerateLastPettyCashSheet(pList[i], pages[pageNo], result);
                    }
                    pageNo++;
                }
                //Save the document.

                Directory.CreateDirectory($@"d:\{CurrentSession.StoreCode}\PettyCashSheet\Missing\");
                using FileStream fileStream = new FileStream($@"d:\{CurrentSession.StoreCode}\PettyCashSheet\Missing\MissingDailySheet.pdf", FileMode.Create, FileAccess.Write);
                document.Save(fileStream);
                //Close the document.
                document.Close(true);
                fileStream.Close();
                return fileStream.Name;
                //return $@"d:\{CurrentSession.StoreCode}\PettyCashSheet\Missing\MissingDailySheet.pdf";
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return "";
            }
        }

        private DataTable ToCashTable()
        {
            try
            {
                DataTable dataTable = new DataTable();
                if (cashDetail == null) { return null; }
                //Add columns to the DataTable
                dataTable.Columns.Add("Sn");
                dataTable.Columns.Add("Denomination");
                dataTable.Columns.Add("Count");
                dataTable.Columns.Add("Amount");

                // Adding rows to the Datatable
                dataTable.Rows.Add(new object[] { "1", "2000", cashDetail.N2000, cashDetail.N2000 * 2000 });
                dataTable.Rows.Add(new object[] { "2", "1000", cashDetail.N1000, cashDetail.N1000 * 1000 });
                dataTable.Rows.Add(new object[] { "3", "500", cashDetail.N500, cashDetail.N500 * 500 });
                dataTable.Rows.Add(new object[] { "4", "200", cashDetail.N200, cashDetail.N200 * 200 });
                dataTable.Rows.Add(new object[] { "5", "100", cashDetail.N100, cashDetail.N100 * 100 });
                dataTable.Rows.Add(new object[] { "6", "50", cashDetail.N50, cashDetail.N50 * 50 });
                dataTable.Rows.Add(new object[] { "7", "20", cashDetail.N20, cashDetail.N20 * 20 });
                dataTable.Rows.Add(new object[] { "8", "10", cashDetail.N10, cashDetail.N10 * 10 });
                dataTable.Rows.Add(new object[] { "9", "Coin 10", cashDetail.C10, cashDetail.C10 * 10 });
                dataTable.Rows.Add(new object[] { "10", "Coin 5", cashDetail.C5, cashDetail.C5 * 5 });
                dataTable.Rows.Add(new object[] { "11", "Coin 2", cashDetail.C2, cashDetail.C2 * 2 });
                dataTable.Rows.Add(new object[] { "12", "Coin 1", cashDetail.C1, cashDetail.C1 * 1 });
                //  dataTable.Rows.Add(new object[] { " ", " ", " "," " });
                dataTable.Rows.Add(new object[] { "Total Count", cashDetail.Count, "Total Amount", cashDetail.TotalAmount });

                return dataTable;
            }
            catch (Exception e)
            {
                LogWrite.LogError(e.Message);
                return null;
            }
        }

        private DataTable ToDataTable(out int rI, out int dI)
        {
            try
            {
                DataTable dataTable = new DataTable();

                //Add columns to the DataTable
                dataTable.Columns.Add("Receipt");
                dataTable.Columns.Add("Amount");
                dataTable.Columns.Add("Payment");
                dataTable.Columns.Add("Amounts");

                //Add rows to the DataTable
                dataTable.Rows.Add(new object[] { "Opening Balance", pcs.OpeningBalance, "Closing Balance", pcs.ClosingBalance });
                dataTable.Rows.Add(new object[] { "Sale", pcs.DailySale, "Card Sale", pcs.CardSale });
                dataTable.Rows.Add(new object[] { "Manual Sale", pcs.ManualSale, "Non Cash Sale", pcs.NonCashSale });
                dataTable.Rows.Add(new object[] { "Tailoring", pcs.TailoringSale, "Tailoring Payment", pcs.TailoringPayment });
                dataTable.Rows.Add(new object[] { "Withdrwal", pcs.TailoringSale, "Deposit", pcs.BankDeposit });

                var nar1 = pcs.ReceiptsNaration.Split('#');
                var nar2 = pcs.PaymentNaration.Split('#');

                List<RowData> rows = new List<RowData>();
                int count = nar1.Length > nar2.Length ? nar1.Length : nar2.Length;
                for (int i = 0; i < count; i++)
                    rows.Add(new RowData());

                int rC = 0;
                foreach (var row in nar1)
                {
                    if (!string.IsNullOrEmpty(row.Trim()) && row.Contains(":"))
                    {
                        var x = row.Split(":");
                        rows[rC].Name1 = x[0];
                        rows[rC].Value1 = x[1];
                        rC++;
                    }
                }
                rC = 0;
                foreach (var row in nar2)
                {
                    if (!string.IsNullOrEmpty(row.Trim()) && row.Contains(":"))
                    {
                        var x = row.Split(":");
                        rows[rC].Name2 = x[0];
                        rows[rC].Value2 = x[1];
                        rC++;
                    }
                }

                nar1 = pcs.RecoveryList.Split('#');
                nar2 = pcs.DueList.Split('#');

                List<RowData> cDue = new List<RowData>();
                count = nar1.Length > nar2.Length ? nar1.Length : nar2.Length;
                for (int i = 0; i < count; i++)
                    cDue.Add(new RowData());

                rC = 0;
                foreach (var row in nar1)
                {
                    if (!string.IsNullOrEmpty(row.Trim()) && row.Contains(":"))
                    {
                        var x = row.Split(":");
                        cDue[rC].Name1 = x[0];
                        cDue[rC].Value1 = x[1];
                        rC++;
                    }
                }
                rC = 0;
                foreach (var row in nar2)
                {
                    if (!string.IsNullOrEmpty(row.Trim()) && row.Contains(":"))
                    {
                        var x = row.Split(":");
                        cDue[rC].Name2 = x[0];
                        cDue[rC].Value2 = x[1];
                        rC++;
                    }
                }

                dI = rI = 0;

                if (cDue.Count > 0)
                {
                    dI = 5;
                    dataTable.Rows.Add(new object[] { "Customer Recovered", pcs.CustomerRecovery, "Customer Due", pcs.CustomerDue });
                }

                foreach (var item in cDue)
                {
                    if (!string.IsNullOrEmpty(item.Name1) || !string.IsNullOrEmpty(item.Name2))
                    {
                        dataTable.Rows.Add(new object[] { item.Name1, item.Value1, item.Name2, item.Value2 });
                        rI++;
                    }
                }

                if (rows.Count > 0)
                {
                    dataTable.Rows.Add(new object[] { "Receipts", pcs.ReceiptsTotal, "Payment", pcs.PaymentTotal });
                    if (dI == 5) rI += dI + 1; else rI = 5;
                }
                foreach (var item in rows)
                {
                    if (!string.IsNullOrEmpty(item.Name1) || !string.IsNullOrEmpty(item.Name2))
                        dataTable.Rows.Add(new object[] { item.Name1, item.Value1, item.Name2, item.Value2 });
                }

                //TODO: need to create total balance.

                var recT = pcs.DailySale + pcs.TailoringSale + pcs.OpeningBalance + pcs.BankWithdrawal + pcs.ReceiptsTotal + pcs.CustomerRecovery + pcs.ManualSale;
                var payT = pcs.ClosingBalance + pcs.CardSale + pcs.NonCashSale + pcs.PaymentTotal + pcs.BankWithdrawal + pcs.CustomerDue + pcs.TailoringPayment;
                dataTable.Rows.Add(new object[] { "   ", "   ", "    ", "         " });
                dataTable.Rows.Add(new object[] { "Total", recT, "Total", payT });

                return dataTable;
            }
            catch (Exception e)
            {
                LogWrite.LogError(e.Message);
                rI = 0; dI = 0;
                return null;
            }
        }
    }

}
