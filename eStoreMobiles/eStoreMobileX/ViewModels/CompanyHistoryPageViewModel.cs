using eStoreMobileX.Models;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Xamarin.Forms.Internals;

namespace eStoreMobileX.ViewModels
{
    /// <summary>
    /// ViewModel for company history page.
    /// </summary>
    [Preserve(AllMembers = true)]
    [DataContract]
    public class CompanyHistoryPageViewModel : BaseViewModel
    {
        #region Fields

        private string companyName;
        private string companyDescription;

        #endregion

        #region Constructor

        /// <summary>
        /// Initializes a new instance for the <see cref="CompanyHistoryPageViewModel"/> class.
        /// </summary>
        public CompanyHistoryPageViewModel()
        {
        }
        #endregion

        #region Properties

        /// <summary>
        /// Gets or sets a collction of value to be displayed in company history page.
        /// </summary>
        [DataMember(Name = "companyHistory")]
        public ObservableCollection<Timeline> CompanyHistory { get; set; }

        /// <summary>
        /// Gets or sets name of the company to be displayed in company history page.
        /// </summary>
        [DataMember(Name = "companyName")]
        public string CompanyName
        {
            get
            {
                return this.companyName;
            }

            set
            {
                this.SetProperty(ref this.companyName, value);
            }
        }

        /// <summary>
        /// Gets or sets description about the company to be displayed in company history page.
        /// </summary>
        [DataMember(Name = "companyDescription")]
        public string CompanyDescription
        {
            get
            {
                return this.companyDescription;
            }

            set
            {
                this.SetProperty(ref this.companyDescription, value);
            }
        }

        #endregion
    }
}
