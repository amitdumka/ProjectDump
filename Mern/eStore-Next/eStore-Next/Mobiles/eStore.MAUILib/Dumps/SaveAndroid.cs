﻿using Android.Content;
using Android.OS;
using eStore_MauiLib.Helpers.Interfaces;
using Java.IO;

[assembly: Dependency(typeof(SaveAndroid))]
public class SaveAndroid : ISave
{
    //Method to save document as a file in Android and view the saved document
    public Task SaveAndView(string fileName, String contentType, MemoryStream stream)
    {
        string exception = string.Empty;
        string root = null;

        if (Android.OS.Environment.IsExternalStorageEmulated)
        {
            root = Android.App.Application.Context.GetExternalFilesDir(Android.OS.Environment.DirectoryDownloads).AbsolutePath;
        }
        else
            root = System.Environment.GetFolderPath(System.Environment.SpecialFolder.MyDocuments);

        Java.IO.File myDir = new Java.IO.File(root + "/Syncfusion");
        myDir.Mkdir();

        Java.IO.File file = new Java.IO.File(myDir, fileName);

        if (file.Exists())
        {
            file.Delete();
        }

        try
        {
            FileOutputStream outs = new FileOutputStream(file);
            outs.Write(stream.ToArray());

            outs.Flush();
            outs.Close();
        }
        catch (Exception e)
        {
            exception = e.ToString();
        }
        if (file.Exists())
        {
            if (Build.VERSION.SdkInt >= BuildVersionCodes.N)
            {
                var fileUri = AndroidX.Core.Content.FileProvider.GetUriForFile(Android.App.Application.Context, Android.App.Application.Context.PackageName + ".provider", file);
                var intent = new Intent(Intent.ActionView);
                intent.SetData(fileUri);
                intent.AddFlags(ActivityFlags.NewTask);
                intent.AddFlags(ActivityFlags.GrantReadUriPermission);
                Android.App.Application.Context.StartActivity(intent);
            }
            else
            {
                var fileUri = Android.Net.Uri.Parse(file.AbsolutePath);
                var intent = new Intent(Intent.ActionView);
                intent.SetDataAndType(fileUri, contentType);
                intent = Intent.CreateChooser(intent, "Open File");
                intent.AddFlags(ActivityFlags.NewTask);
                Android.App.Application.Context.StartActivity(intent);
            }
        }

        return Task.CompletedTask;
    }
}