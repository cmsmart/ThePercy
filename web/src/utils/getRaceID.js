export const event_ids = [{ year: 2008,name: "Percy",event_id: 101},
{ year: 2008,name: "Percy Junior",event_id: 102},
{ year: 2009,name: "Percy",event_id: 103},
{ year: 2009,name: "Percy Junior",event_id: 104},
{ year: 2010,name: "Percy",event_id: 105},
{ year: 2010,name: "Percy Junior",event_id: 106},
{ year: 2011,name: "Percy",event_id: 107},
{ year: 2011,name: "Percy Junior",event_id: 108},
{ year: 2012,name: "Percy",event_id: 109},
{ year: 2012,name: "Percy Junior",event_id: 110},
{ year: 2013,name: "Percy",event_id: 111},
{ year: 2013,name: "Percy Junior",event_id: 112},
{ year: 2014,name: "Percy",event_id: 113},
{ year: 2014,name: "Percy Junior",event_id: 114},
{ year: 2015,name: "Percy",event_id: 115},
{ year: 2015,name: "Percy Junior",event_id: 116},
{ year: 2016,name: "Percy",event_id: 117},
{ year: 2016,name: "Percy Junior",event_id: 118},
{ year: 2017,name: "Percy",event_id: 119},
{ year: 2017,name: "Percy Junior",event_id: 120},
{ year: 2018,name: "Percy",event_id: 121},
{ year: 2018,name: "Percy Junior",event_id: 122}]

export const getRaceID = (year, race) => {
  let id = "";
  let yearInt = parseInt(year,10);
  event_ids.map(event => {
    if (event.year === yearInt) {
      if (event.name === race) {
        id = event.event_id;
      }
      return id;
    }
    return id;
  });
  return id;
};

export const getRaceYear = (id) => {
  let year = ''
  let idInt = parseInt(id, 10)
  event_ids.map(event => {
    if (event.event_id === idInt) {
      year = event.year
    }
    return year
  })
  return year
}