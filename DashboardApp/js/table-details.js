function buildTable()
{  
    var tabobj = document.createElement("table");
    tabobj.setAttribute('class', 'table table-hover');
    tabobj.width="80%";
    thead = document.createElement("thead");
    tabobj.appendChild(thead);
    row = document.createElement("tr");
    thead.appendChild(row);
    for (var col in CampaignsList[0]) {
       tHdg = document.createElement("th");
        HdgName = col;
        tHdg.innerHTML=HdgName;
        row.appendChild(tHdg);
    }
    tbody=document.createElement("tbody");
    tabobj.appendChild(tbody);

    for (i = 0; i < CampaignsList.length ; i++) 
    {
        row = document.createElement("tr");
        row.setAttribute("id", "tr" + i);
         for (var index in CampaignsList[i]) {
            td = document.createElement("td");
            td.className='cell';
            tContent = CampaignsList[i][index];
            td.innerHTML=tContent;
            row.appendChild(td);
         }
        tbody.appendChild(row);
    }
    main=document.getElementById('divTable');
    main.appendChild(tabobj);
}

var CampaignsList =  [          {
                                      ID : 1,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },

                                  {
                                      ID : 2,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },

                                  {
                                      ID : 3,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },

                                   {
                                      ID : 4,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },

                                  {
                                      ID : 5,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },

                                  {
                                      ID : 6,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },

                                   {
                                      ID : 7,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },

                                  {
                                      ID : 8,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },

                                  {
                                      ID : 9,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },
                                  {
                                      ID : 10,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },

                                   {
                                      ID : 11,
                                      Name : "Campaign Name",
                                      DateCreated : "12 DEC 2015",
                                      LastUpdated : "12 DEC 2015",
                                      TotalViews :"5 K",
                                      Sales:"1000 Units",
                                      EndDate:"12 DEC 2015"
                                  },
                               ];