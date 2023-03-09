﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Foundation;
using MessageUI;
using eStoreMobileX.iOS;
using UIKit;
using Xamarin.Forms;

[assembly: Dependency(typeof(SaveIOS))]

[module: System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.NamingRules", "SA1300:ElementMustBeginWithUpperCaseLetter", Justification = "Reviewed.")]

namespace eStoreMobileX.iOS
{
    [Preserve(AllMembers = true)]

    /// <summary>
    ///  A dependency service to save a exported file in IOS
    /// </summary>
    public class SaveIOS : ISave
    {
        /// <summary>
        /// Used to save DataGrid exporting files Excel and PDF.
        /// </summary>
        /// <param name="filename">string type parameter fileName</param>
        /// <param name="contentType">string type parameter contentType</param>
        /// <param name="stream">MemoryStream type parameter stream</param>
        public void Save(string filename, string contentType, MemoryStream stream)
        {
            string exception = string.Empty;
            string path = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
            string filePath = Path.Combine(path, filename);
            try
            {
                FileStream fileStream = File.Open(filePath, FileMode.Create);
                stream.Position = 0;
                stream.CopyTo(fileStream);
                fileStream.Flush();
                fileStream.Close();
            }
            catch (Exception e)
            {
                exception = e.ToString();
            }

            if (contentType == "application/html" || exception != string.Empty)
            {
                return;
            }

            UIViewController currentController = UIApplication.SharedApplication.KeyWindow.RootViewController;
            while (currentController.PresentedViewController != null)
            {
                currentController = currentController.PresentedViewController;
            }

            UIView currentView = currentController.View;

            QuickLook.QLPreviewController d_qlPreview = new QuickLook.QLPreviewController();
            QuickLook.QLPreviewItem item = new QLPreviewItemBundle(filename, filePath);
            d_qlPreview.DataSource = new PreviewControllerDS(item);
            //// UIViewController uiView = currentView as UIViewController;

            currentController.PresentViewController((UIViewController)d_qlPreview, true, (Action)null);
        }
    }
}
