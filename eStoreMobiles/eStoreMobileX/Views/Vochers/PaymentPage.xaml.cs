using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using eStore.Shared.Models.Accounts;
using eStoreMobileX.Views.Vochers.Editors;
using Xamarin.Forms;

namespace eStoreMobileX.Views.Vochers
{
    public partial class PaymentPage : ContentPage
    {
        public PaymentPage()
        {
            InitializeComponent();
        }
       private async void pullToRefresh_Refreshing(System.Object sender, System.EventArgs e)
        {
            pullToRefresh.IsRefreshing = true;
            await Task.Delay(1200);
            this.viewModel.ItemsSourceRefresh();
            pullToRefresh.IsRefreshing = false;
            
           
        }

        async void ToolbarItem_Clicked(System.Object sender, System.EventArgs e)
        {
            try
            {
                await Shell.Current.GoToAsync(nameof(PaymentEditorPage));
            }
            catch (Exception ex)
            {
                await DisplayAlert("Alert", "Error: " + ex.Message, "Ok");
            }
        }
    }
}
