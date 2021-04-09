import React, { useEffect } from "react";

export const Menu = () => {
  useEffect(() => {
    console.log("here");
    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  });
  return (
    <nav>
      <button id="button" className="collapsible menuButton">
        <span className="mr-2">Menu</span> <span className="menuArrow"></span>
      </button>

      <div className="container content">
        <ul
          role="menu"
          aria-orientation="vertical"
          data-ajax-replace="/content/dam/canada/sitemenu/sitemenu-v2-en.html"
          className="wb-init wb-data-ajax-replace-inited"
          id="wb-auto-3"
        >
          <li>
            <a
              tabIndex="0"
              aria-haspopup="true"
              aria-controls="gc-mnu-jobs"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Jobs and the workplace
            </a>
            <ul
              id="gc-mnu-jobs"
              role="menu"
              aria-orientation="vertical"
              className="content subListItem"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="0"
                  href="https://www.canada.ca/en/services/jobs.html"
                >
                  Jobs
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/jobs/opportunities.html"
                >
                  Find a job
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/jobs/training.html"
                >
                  Training
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/business-management"
                >
                  Hiring and managing employees
                </a>
              </li>
              <li className="listItem">
                <a tabIndex="-1" href="https://www.canada.ca/start-business">
                  Starting a business
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/jobs/workplace.html"
                >
                  Workplace standards
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/pensions.html"
                >
                  Pensions and retirement
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/benefits/ei.html"
                >
                  Employment Insurance benefits and leave
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>

              <li className="mostRequestedList">
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-jobs-sub"
                  aria-expanded="false"
                  className="collapsible listItem"
                >
                  <span className="mostRequestedArrow"></span>
                  Most requested
                </a>
                <ul
                  id="gc-mnu-jobs-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content mostRequest"
                >
                  <li className="listItem">
                    <a
                      tabIndex="0"
                      href="https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/ei-roe/access-roe.html"
                    >
                      View your Records of Employment
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/employment-social-development/services/sin.html"
                    >
                      Apply for a Social Insurance Number (SIN)
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/employment-social-development/services/foreign-workers.html"
                    >
                      Hire a temporary foreign worker
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html"
                    >
                      Immigrate as a skilled worker
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-cit"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Immigration and citizenship
            </a>
            <ul
              id="gc-mnu-cit"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="0"
                  href="https://www.canada.ca/en/services/immigration-citizenship.html"
                >
                  Immigration
                  <span className="hidden-xs hidden-sm"> and citizenship</span>
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application.html"
                >
                  My application
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html"
                >
                  Visit
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html"
                >
                  Immigrate
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html"
                >
                  Work
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
                >
                  Study
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html"
                >
                  Citizenship
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html"
                >
                  New immigrants
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians.html"
                >
                  Canadians
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees.html"
                >
                  Refugees and asylum
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/immigration-citizenship/enforcement-violations.html"
                >
                  Enforcement and violations
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-cit-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-cit-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html"
                    >
                      Sign in or create an account to apply online
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html"
                    >
                      Check your application status
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
                    >
                      Check application processing times
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides.html"
                    >
                      Find an application form
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.cic.gc.ca/english/information/fees/index.asp"
                    >
                      Pay your fees
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.cic.gc.ca/english/visit/visas.asp"
                    >
                      Find out if you need an eTA or a visa to visit Canada
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.cic.gc.ca/english/helpcentre/index-featured-can.asp"
                    >
                      Have questions? Find answers in the Help Centre
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-travel"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Travel and tourism
            </a>
            <ul
              id="gc-mnu-travel"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a tabIndex="-1" href="https://travel.gc.ca/">
                  Travel
                  <span className="hidden-xs hidden-sm"> and tourism</span>
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://travel.gc.ca/travelling/advisories"
                >
                  Travel advice and advisories
                </a>
              </li>
              <li className="listItem">
                <a tabIndex="-1" href="https://travel.gc.ca/travel-covid">
                  COVID-19: Travel, quarantine and borders
                </a>
              </li>
              <li className="listItem">
                <a tabIndex="-1" href="https://www.canada.ca/visit">
                  Visit Canada
                </a>
              </li>
              <li className="listItem">
                <a tabIndex="-1" href="https://travel.gc.ca/travelling">
                  Travel abroad
                </a>
              </li>
              <li className="listItem">
                <a tabIndex="-1" href="https://travel.gc.ca/air">
                  Air travel
                </a>
              </li>
              <li className="listItem">
                <a tabIndex="-1" href="https://travel.gc.ca/returning">
                  Return to Canada
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html"
                >
                  Canadian passports
                </a>
              </li>
              <li className="listItem">
                <a tabIndex="-1" href="https://travel.gc.ca/canadian-tourism">
                  Canadian attractions, events and experiences
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://travel.gc.ca/assistance/ask-travel"
                >
                  Ask travel
                </a>
              </li>
              <li className="listItem">
                <a tabIndex="-1" href="https://travel.gc.ca/assistance">
                  Assistance abroad
                </a>
              </li>
              <li className="listItem">
                <a tabIndex="-1" href="https://travel.gc.ca/stay-connected">
                  Stay connected
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-travel-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-travel-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://travel.gc.ca/travelling/children/consent-letter"
                    >
                      Consent letter for children travelling abroad
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.cbsa-asfc.gc.ca/bwt-taf/menu-eng.html"
                    >
                      Canada - U.S. border wait times
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://travel.gc.ca/travelling/registration"
                    >
                      Register as a Canadian abroad
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.cbsa-asfc.gc.ca/prog/nexus/application-demande-eng.html"
                    >
                      Apply for NEXUS
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://travel.gc.ca/returning/customs/what-you-can-bring-home-to-canada"
                    >
                      What you can bring home to Canada
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://travel.gc.ca/assistance/embassies-consulates"
                    >
                      Contact an embassy or consulate
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://travel.gc.ca/travelling/cannabis-and-international-travel"
                    >
                      Cannabis and international travel
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-biz"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Business and industry
            </a>
            <ul
              id="gc-mnu-biz"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business.html"
                >
                  Business
                  <span className="hidden-xs hidden-sm"> and industry</span>
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/start.html"
                >
                  Starting a business
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/grants.html"
                >
                  Business grants and financing
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/taxes.html"
                >
                  Business taxes
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/federal-corporations.html"
                >
                  Federal corporations
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/hire.html"
                >
                  Hiring and managing employees
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/trade.html"
                >
                  International trade and investment
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/permits.html"
                >
                  Permits, licences and regulations
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/doing-business.html"
                >
                  Doing business with government
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/science/innovation.html"
                >
                  R&amp;D and innovation
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/research.html"
                >
                  Research and business intelligence
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/ip.html"
                >
                  Intellectual property and copyright
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/maintaingrowimprovebusiness.html"
                >
                  Maintaining your business
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/protecting.html"
                >
                  Protecting your business
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/bankruptcy.html"
                >
                  Insolvency for business
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-biz-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-biz-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/fdrlCrpSrch.html?locale=en_CA"
                    >
                      Find a corporation
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.cbsa-asfc.gc.ca/prog/manif/portal-portail-eng.html"
                    >
                      Report your imported goods
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.ic.gc.ca/app/opic-cipo/trdmrks/srch/home?lang=eng"
                    >
                      Search for trademarks
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2018/html/tblmod-1-eng.html"
                    >
                      Review custom tariffs for importing goods
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.ic.gc.ca/opic-cipo/cpd/eng/introduction.html"
                    >
                      Find a patent
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.cbsa-asfc.gc.ca/comm-eng.html"
                    >
                      Import and export from Canada
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://ic.gc.ca/eic/site/cd-dgc.nsf/eng/h_cs03922.html"
                    >
                      Name a business
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/hm.html?locale=en_CA"
                    >
                      Make changes to your corporation (Online Filing Centre)
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-benny"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Benefits
            </a>
            <ul
              id="gc-mnu-benny"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/benefits.html"
                >
                  Benefits
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.canada.ca/en/services/benefits/covid19-emergency-benefits.html"
                >
                  COVID-19 – Benefits and services{" "}
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/benefits/ei.html"
                >
                  Employment Insurance benefits and leave
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/benefits/family.html"
                >
                  Family and caregiving benefits
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/benefits/publicpensions.html"
                >
                  Public pensions
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/benefits/education.html"
                >
                  Student aid and education planning
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/benefits/housing.html"
                >
                  Housing benefits
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/benefits/disability.html"
                >
                  Disability benefits
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.canada.ca/en/services/benefits/audience.html"
                >
                  Benefits by audience
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/benefits/calendar.html"
                >
                  Benefits payment dates
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://benefitsfinder.services.gc.ca/hm?GoCTemplateCulture=en-CA"
                >
                  Benefits finder
                </a>
              </li>

              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-benny-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-benny-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit.html"
                    >
                      Apply for Employment Insurance
                    </a>
                  </li>

                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html"
                    >
                      Apply for student loans and grants
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/government/sign-in-online-account.html"
                    >
                      Sign in to a Government of Canada online account
                    </a>
                  </li>

                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-eng.html"
                    >
                      Sign up for direct deposit
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/services/benefits/ei/ei-internet-reporting.html"
                    >
                      Submit your EI report
                    </a>
                  </li>

                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.cra-arc.gc.ca/bnfts/clcltr/cfbc-eng.html"
                    >
                      Child and family benefits calculators
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-health"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Health
            </a>
            <ul
              id="gc-mnu-health"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/health.html"
                >
                  Health
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/health/food-nutrition.html"
                >
                  Food and nutrition
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/public-health/services/diseases.html"
                >
                  Diseases and conditions
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/public-health/topics/immunization-vaccines.html"
                >
                  Vaccines and immunization
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/health/drug-health-products.html"
                >
                  Drug and health products
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/health/product-safety.html"
                >
                  Product safety
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/health/health-risks-safety.html"
                >
                  Health risks and safety
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/health/healthy-living.html"
                >
                  Healthy living
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/health/aboriginal-health.html"
                >
                  Indigenous health
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/health/health-system-services.html"
                >
                  Health system and services
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/health/science-research-data.html"
                >
                  Science, research and data
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-health-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-health-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/industry-licensees-applicants/licensed-cultivators-processors-sellers.html"
                    >
                      Licensed cultivators, processors and seller of cannabis
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://healthycanadians.gc.ca/recall-alert-rappel-avis/index-eng.php"
                    >
                      Food and product recalls and safety alerts
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/health-canada/services/canada-food-guides.html"
                    >
                      Canada's food guide
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-taxes"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Taxes
            </a>
            <ul
              id="gc-mnu-taxes"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/taxes.html"
                >
                  Taxes
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/taxes/income-tax.html"
                >
                  Income tax
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html"
                >
                  GST/HST
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll.html"
                >
                  Payroll
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/taxes/business-number.html"
                >
                  Business number
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/taxes/savings-and-pension-plans.html"
                >
                  Savings and pension plans
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/taxes/child-and-family-benefits.html"
                >
                  Child and family benefits
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/taxes/excise-taxes-duties-and-levies.html"
                >
                  Excise taxes, duties, and levies
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/taxes/charities.html"
                >
                  Charities and giving
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-taxes-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-taxes-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals.html"
                    >
                      My Account
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses/business-account.html"
                    >
                      My Business Account
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/revenue-agency/services/e-services/represent-a-client.html"
                    >
                      Represent a Client
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses/gst-hst-netfile.html"
                    >
                      File a GST/HST return (NETFILE)
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/revenue-agency/services/make-a-payment-canada-revenue-agency.html"
                    >
                      Make a payment to the Canada Revenue Agency
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/benefit-payment-dates.html"
                    >
                      Find the next benefit payment date
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-enviro"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Environment and natural resources
            </a>
            <ul
              id="gc-mnu-enviro"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/environment.html"
                >
                  Environment
                  <span className="hidden-xs hidden-sm">
                    {" "}
                    and natural resources
                  </span>
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/environment/weather.html"
                >
                  Weather, climate and hazards
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/environment/energy.html"
                >
                  Energy
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/environment/natural-resources.html"
                >
                  Natural resources
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.agr.gc.ca/eng/agriculture-and-the-environment/?id=1580153237101"
                >
                  Agriculture and the environment
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/environment/fisheries.html"
                >
                  Fisheries
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/environment/wildlife-plants-species.html"
                >
                  Wildlife, plants and species
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/environment/pollution-waste-management.html"
                >
                  Pollution and waste management
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/environment/conservation.html"
                >
                  Environmental conservation and protection
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-enviro-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-enviro-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a tabIndex="-1" href="https://weather.gc.ca/canada_e.html">
                      Local weather forecast
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.nrcan.gc.ca/energy/efficiency/transportation/20996"
                    >
                      Fuel-efficient vehicles
                    </a>
                  </li>
                  <li className="listItem">
                    <a tabIndex="-1" href="https://www.nrcan.gc.ca/homes">
                      Home energy efficiency
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry.html"
                    >
                      Species at risk
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/environment-climate-change/services/seasonal-weather-hazards.html"
                    >
                      Prepare for severe weather
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-defence"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              National security and defence
            </a>
            <ul
              id="gc-mnu-defence"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/defence.html"
                >
                  <span className="hidden-xs hidden-sm">
                    National security and defence
                  </span>
                  <span className="visible-xs-inline visible-sm-inline">
                    Defence: home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/defence/nationalsecurity.html"
                >
                  National security
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/defence/caf.html"
                >
                  Canadian Armed Forces
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/defence/defence-equipment-purchases-upgrades.html"
                >
                  Defence equipment purchases and upgrades
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.tc.gc.ca/en/services/transportation-security.html"
                >
                  Transportation security
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/defence/securingborder.html"
                >
                  Securing the border
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/defence/cybersecurity.html"
                >
                  Cyber security
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/defence/jobs.html"
                >
                  Jobs in national security and defence
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/government/publicservice/benefitsmilitary.html"
                >
                  Services and benefits for the military
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-defence-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-defence-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a tabIndex="-1" href="https://forces.ca/en/careers/">
                      Jobs in the Canadian Armed Forces
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/department-national-defence/services/military-history/history-heritage/insignia-flags/ranks/rank-appointment-insignia.html"
                    >
                      Military ranks
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/services/defence/caf/equipment.html"
                    >
                      Defence equipment
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.publicsafety.gc.ca/cnt/ntnl-scrt/cntr-trrrsm/lstd-ntts/crrnt-lstd-ntts-en.aspx"
                    >
                      Current list of terrorist entities
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.cadets.ca/en/join/cadets.page"
                    >
                      Join the Cadets
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://dgpaapp.forces.gc.ca/en/canada-defence-policy/index.asp"
                    >
                      Canada's Defence policy
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-culture"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Culture, history and sport
            </a>
            <ul
              id="gc-mnu-culture"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/culture.html"
                >
                  Culture
                  <span className="hidden-xs hidden-sm">
                    , history and sport
                  </span>
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/canadian-heritage/services/funding.html"
                >
                  Funding - Culture, history and sport
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/culture/events-celebrations-commemorations.html"
                >
                  Events, celebrations and commemorations
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/culture/cultural-attractions.html"
                >
                  Cultural landmarks and attractions
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/culture/canadian-identity-society.html"
                >
                  Canadian identity and society
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/culture/sport.html"
                >
                  Sport
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/culture/history-heritage.html"
                >
                  History and heritage
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/culture/arts-media.html"
                >
                  Arts and media
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/culture/cultural-youth-programs.html"
                >
                  Cultural youth programs
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/culture/cultural-trade-investment.html"
                >
                  Cultural trade and investment
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-culture-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-culture-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.veterans.gc.ca/eng/remembrance/memorials/canadian-virtual-war-memorial"
                    >
                      Visit the Canadian Virtual War Memorial
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/services/culture/canadian-identity-society/anthems-symbols.html"
                    >
                      Anthems and symbols of Canada
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://crtc.gc.ca/eng/8045/d2018.htm"
                    >
                      Find a CRTC decision
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.bac-lac.gc.ca/eng/search/Pages/ancestors-search.aspx"
                    >
                      Research your family history
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.bac-lac.gc.ca/eng/census/Pages/census.aspx"
                    >
                      Search census records
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/services/culture/cultural-attractions/attractions-canada-capital.html"
                    >
                      Landmarks and attractions in Canada's capital
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-policing"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Policing, justice and emergencies
            </a>
            <ul
              id="gc-mnu-policing"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/policing.html"
                >
                  Policing
                  <span className="hidden-xs hidden-sm">
                    , justice and emergencies
                  </span>
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/policing/police/index.html"
                >
                  Policing
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/policing/justice.html"
                >
                  Justice
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/policing/emergencies.html"
                >
                  Emergencies
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/policing/corrections.html"
                >
                  Corrections
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/policing/parole.html"
                >
                  Parole, record suspension, expungement and clemency
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/policing/victims.html"
                >
                  Victims of crime
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-policing-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-policing-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.rcmp-grc.gc.ca/cfp-pcaf/online_en-ligne/index-eng.htm"
                    >
                      Apply/Renew a firearms licence
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.rcmp-grc.gc.ca/en/criminal-record-checks"
                    >
                      Get a criminal records check
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/parole-board/services/record-suspensions/official-pbc-application-guide-and-forms.html"
                    >
                      Apply for a criminal record suspension
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.getprepared.gc.ca/cnt/hzd/drng-en.aspx"
                    >
                      What to do during an emergency
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/services/policing/police/community-safety-policing/impaired-driving.html"
                    >
                      Know the law on impaired driving
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/services/policing/police/help-solve-crime.html"
                    >
                      Help solve a crime
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-trans"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Transport and infrastructure
            </a>
            <ul
              id="gc-mnu-trans"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/transport.html"
                >
                  Transport
                  <span className="hidden-xs hidden-sm">
                    {" "}
                    and infrastructure
                  </span>
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.tc.gc.ca/en/services/aviation.html"
                >
                  Aviation
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.tc.gc.ca/en/services/marine.html"
                >
                  Marine transportation
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.tc.gc.ca/en/services/road.html"
                >
                  Road transportation
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.tc.gc.ca/en/services/rail.html"
                >
                  Rail transportation
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.tc.gc.ca/en/services/dangerous-goods.html"
                >
                  Dangerous goods
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.tc.gc.ca/en/services/infrastructure.html"
                >
                  Infrastructure
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-trans-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-trans-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.tc.gc.ca/en/services/aviation/drone-safety.html"
                    >
                      Drone safety
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://tc.canada.ca/en/aviation/aviation-security/what-not-bring-plane"
                    >
                      What you can't bring on an airplane
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.tc.gc.ca/eng/marinesafety/oep-vesselreg-menu-728.htm"
                    >
                      Register your vessel
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.tc.gc.ca/en/services/road/child-car-seat-safety.html"
                    >
                      Child car seat safety
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.tc.gc.ca/eng/tdg/clear-tofc-211.htm"
                    >
                      Transporting dangerous goods - Regulations
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://www.tc.gc.ca/eng/acts-regulations/regulations-sor96-433.htm"
                    >
                      Canadian Aviation Regulations
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-canworld"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Canada and the world
            </a>
            <ul
              id="gc-mnu-canworld"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="http://international.gc.ca/world-monde/index.aspx?lang=eng"
                >
                  Canada and the world
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://international.gc.ca/world-monde/offices-bureaux/index.aspx?lang=eng"
                >
                  International offices and emergency contacts
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://international.gc.ca/world-monde/study_work_travel-etude_travail_voyage/index.aspx?lang=eng"
                >
                  Study, work and travel worldwide
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://international.gc.ca/world-monde/country-pays/index.aspx?lang=eng"
                >
                  Information by countries and territories
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://international.gc.ca/world-monde/stories-histoires/index.aspx?lang=eng"
                >
                  Stories
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://international.gc.ca/world-monde/international_relations-relations_internationales/index.aspx?lang=eng"
                >
                  International relations
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://international.gc.ca/world-monde/issues_development-enjeux_developpement/index.aspx?lang=eng"
                >
                  Global issues and international assistance
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://international.gc.ca/world-monde/funding-financement/index.aspx?lang=eng"
                >
                  Funding for international initiatives
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="http://www.canada.ca/en/services/business/trade/index.html"
                >
                  International trade and investment
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-canworld-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-canworld-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.international.gc.ca/world-monde/covid-19/index.aspx?lang=eng"
                    >
                      COVID-19: Trade, foreign affairs, international trade and
                      development
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://scholarships-bourses.gc.ca/scholarships-bourses/non_can/opportunities-opportunites.aspx?lang=eng"
                    >
                      Find a Canadian scholarship as an international student
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://treaty-accord.gc.ca/index.aspx"
                    >
                      International treaties signed by Canada
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://educanada.ca/index.aspx?lang=eng"
                    >
                      Find international study or research opportunities in
                      Canada
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://travel.gc.ca/assistance/embassies-consulates"
                    >
                      Contact an embassy or consulate
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://international.gc.ca/protocol-protocole/reps.aspx?lang=eng"
                    >
                      Contact a foreign representative in Canada
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.international.gc.ca/gac-amc/about-a_propos/services/authentication-authentification/step-etape-1.aspx?lang=eng"
                    >
                      Authenticate a document
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-money"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Money and finances
            </a>
            <ul
              id="gc-mnu-money"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance.html"
                >
                  <span className="hidden-xs hidden-sm">
                    Money and finances
                  </span>
                  <span className="visible-xs-inline visible-sm-inline">
                    Finance: home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/manage.html"
                >
                  Managing your money
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/debt.html"
                >
                  Debt and borrowing
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/savings.html"
                >
                  Savings and investments
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/educationfunding.html"
                >
                  Education funding
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/pensions.html"
                >
                  Pensions and retirement
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/fraud.html"
                >
                  Protection from frauds and scams
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/tools.html"
                >
                  Financial tools and calculators
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/financial-consumer-agency/services/financial-literacy-programs.html"
                >
                  Financial literacy programs
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/consumer-affairs.html"
                >
                  Consumer affairs
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/finance/bankruptcy.html"
                >
                  Insolvency
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/taxes.html"
                >
                  Taxes
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/government/system/finances.html"
                >
                  Government finances
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/grants.html"
                >
                  Business grants and financing
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/permits/federallyregulatedindustrysectors/financialservicesregulation.html"
                >
                  Financial and money services regulation
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-money-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-money-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.ic.gc.ca/app/scr/bsf-osb/ins/login.html?lang=eng"
                    >
                      Find a bankruptcy or insolvency record
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/services/jobs/education/student-financial-aid/student-loan.html"
                    >
                      Student loans
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.tpsgc-pwgsc.gc.ca/recgen/txt/depot-deposit-eng.html"
                    >
                      Set up direct deposit
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages.html"
                    >
                      Mortgages
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html"
                    >
                      Credit report and scores
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://itools-ioutils.fcac-acfc.gc.ca/BC-CB/NetInc-RevNet-eng.aspx"
                    >
                      Make a budget
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html"
                    >
                      Rates and contribution limits
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <a
              tabIndex="-1"
              aria-haspopup="true"
              aria-controls="gc-mnu-science"
              aria-expanded="false"
              className="collapsible topMenuItem  listItem"
              href="#"
            >
              Science and innovation
            </a>
            <ul
              id="gc-mnu-science"
              role="menu"
              aria-orientation="vertical"
              className="content"
            >
              <li className="listItem">
                {" "}
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/science.html"
                >
                  Science
                  <span className="hidden-xs hidden-sm"> and innovation</span>
                  <span className="visible-xs-inline visible-sm-inline">
                    : home
                  </span>
                </a>{" "}
              </li>
              <li role="separator"></li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/science/researchfunding.html"
                >
                  Research funding and awards
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/science/sciencesubjects.html"
                >
                  Science subjects
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/science/open-data.html"
                >
                  Open data, statistics and archives
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/science/institutes.html"
                >
                  Research institutes and facilities
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/science/innovation.html"
                >
                  R&amp;D and innovation
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/business/ip.html"
                >
                  Intellectual property and copyright
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/science/scientistsdirectory.html"
                >
                  Directory of scientists and research professionals
                </a>
              </li>
              <li className="listItem">
                <a
                  tabIndex="-1"
                  href="https://www.canada.ca/en/services/science/educationalresources.html"
                >
                  Science education resources
                </a>
              </li>
              <li role="separator" aria-orientation="horizontal"></li>
              <li>
                {" "}
                <a
                  data-keep-expanded="md-min"
                  href="#"
                  tabIndex="-1"
                  aria-haspopup="true"
                  aria-controls="gc-mnu-science-sub"
                  aria-expanded="false"
                  className="collapsible"
                >
                  Most requested
                </a>
                <ul
                  id="gc-mnu-science-sub"
                  role="menu"
                  aria-orientation="vertical"
                  className="content"
                >
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.nrc-cnrc.gc.ca/eng/publications/codes_centre/2015_national_building_code.html"
                    >
                      National building codes
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.nrc-cnrc.gc.ca/eng/services/time/web_clock.html#tzpanel-4"
                    >
                      Official time across Canada
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.nrc-cnrc.gc.ca/eng/services/sunrise/index.html"
                    >
                      Check sunrise and sunset times
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://www.nrc-cnrc.gc.ca/eng/irap/services/financial_assistance.html"
                    >
                      Grants for technological innovation (IRAP)
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="https://science-libraries.canada.ca/eng/home/"
                    >
                      Federal Science Library
                    </a>
                  </li>
                  <li className="listItem">
                    <a
                      tabIndex="-1"
                      href="http://asc-csa.gc.ca/eng/astronomy/auroramax/hd-480.asp"
                    >
                      Live view of northern lights cam
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
