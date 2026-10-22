/* =========================================================
   JOURNAL CONTENT
   ---------------------------------------------------------
   Every diary entry, letter and document lives here.
   The site is rebuilt from this list automatically, so to
   add, remove or reorder entries you only edit this file.

   Entry fields:
     id          short unique name, used in the URL (#entry-stamp-act)
     date        "YYYY-MM-DD" — places the entry on the timeline
     dateLabel   how the date is written at the top of the page
     title       short heading under the date
     event       name of the real historical event
     context     short note explaining the event (shown in side panel)
     diary       array of paragraphs; leave as [] to show a placeholder
     letters     array of { from, to, date, body }   (body: array of paragraphs)
     documents   array of { title, image, imageAlt, citation, url, note }

   NOTE: dates and events below are a working outline —
   confirm each one against your sources.
   ========================================================= */

const JOURNAL_ENTRIES = [
  {
    id: "stamp-act",
    date: "1765-11-07",
    dateLabel: "7th November, 1765",
    title: "Upon the Stamp Act",
    event: "The Stamp Act takes effect (1 Nov. 1765)",
    context: "[Insert historical context here]",
    diary: [],
    letters: [
      { from: "[Correspondent]", to: "William Hutchinson", date: "[Date]", body: [] }
    ],
    documents: [
      {
        title: "Thomas Wharton to Benjamin Franklin, 7 November 1765",
        image: "",
        imageAlt: "",
        citation: "Wharton, Thomas. \"Thomas Wharton to Benjamin Franklin, 7 November 1765.\" Founders Online, National Archives.",
        url: "https://founders.archives.gov/documents/Franklin/01-12-02-0178",
        note: "[Insert excerpt or explanation here]"
      }
    ]
  },
  {
    id: "non-importation",
    date: "1769-03-10",
    dateLabel: "[Date], 1769",
    title: "[Entry title]",
    event: "Philadelphia merchants adopt non-importation against the Townshend Acts",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "tea-ship",
    date: "1773-12-27",
    dateLabel: "[Date] December, 1773",
    title: "[Entry title]",
    event: "The tea ship Polly is turned back from Philadelphia",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      {
        title: "To the Delaware Pilots (1773)",
        image: "",
        imageAlt: "",
        citation: "Committee for Tarring and Feathering. To the Delaware Pilots. Philadelphia, 1773. Broadside. Library of Congress.",
        url: "https://www.loc.gov/item/rbpe.1430330a/",
        note: "[Insert excerpt or explanation here]"
      }
    ]
  },
  {
    id: "continental-congress",
    date: "1774-09-05",
    dateLabel: "[Date] September, 1774",
    title: "[Entry title]",
    event: "The First Continental Congress meets at Carpenters' Hall",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      {
        title: "The Bostonian's Paying the Excise-Man, or Tarring & Feathering (1774)",
        image: "",
        imageAlt: "",
        citation: "Dawe, Philip (attributed). London: Robert Sayer and John Bennett, 1774. Library of Congress Prints and Photographs Division.",
        url: "https://www.loc.gov/item/2004673302/",
        note: "[Insert explanation here]"
      }
    ]
  },
  {
    id: "lexington",
    date: "1775-04-24",
    dateLabel: "[Date] April, 1775",
    title: "[Entry title]",
    event: "News of Lexington and Concord reaches Philadelphia",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "common-sense",
    date: "1776-01-10",
    dateLabel: "[Date] January, 1776",
    title: "[Entry title]",
    event: "Thomas Paine's Common Sense is published in Philadelphia",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "independence",
    date: "1776-07-08",
    dateLabel: "[Date] July, 1776",
    title: "[Entry title]",
    event: "The Declaration of Independence is read publicly in the State House yard",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "test-act",
    date: "1777-06-13",
    dateLabel: "[Date] June, 1777",
    title: "[Entry title]",
    event: "Pennsylvania passes the Test Act requiring oaths of allegiance",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "occupation",
    date: "1777-09-26",
    dateLabel: "[Date] September, 1777",
    title: "[Entry title]",
    event: "The British Army enters and occupies Philadelphia",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "meschianza",
    date: "1778-05-18",
    dateLabel: "[Date] May, 1778",
    title: "[Entry title]",
    event: "The Meschianza, a farewell fête for General Howe",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "evacuation",
    date: "1778-06-18",
    dateLabel: "[Date] June, 1778",
    title: "[Entry title]",
    event: "The British evacuate Philadelphia; the Patriots return",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "treason-trials",
    date: "1778-11-04",
    dateLabel: "[Date] November, 1778",
    title: "[Entry title]",
    event: "Loyalists Abraham Carlisle and John Roberts are hanged for treason",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      {
        title: "Diary of Grace Growden Galloway (1778–79)",
        image: "",
        imageAlt: "",
        citation: "Galloway, Grace Growden. \"Diary of Grace Growden Galloway.\" Edited by Raymond C. Werner. Pennsylvania Magazine of History and Biography 55, no. 1 (1931): 32–94.",
        url: "http://www.jstor.org/stable/20086760",
        note: "[Insert excerpt or explanation here]"
      }
    ]
  },
  {
    id: "yorktown",
    date: "1781-10-24",
    dateLabel: "[Date] October, 1781",
    title: "[Entry title]",
    event: "News of Cornwallis's surrender at Yorktown reaches Philadelphia",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "peace",
    date: "1783-09-03",
    dateLabel: "[Date] September, 1783",
    title: "[Entry title]",
    event: "The Treaty of Paris ends the war",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      { title: "[Insert document here]", image: "", imageAlt: "", citation: "[Citation]", url: "", note: "" }
    ]
  },
  {
    id: "exile",
    date: "1784-08-06",
    dateLabel: "[Date], 1784",
    title: "[Entry title]",
    event: "[Hutchinson's fate after the war — exile, compensation claim, etc.]",
    context: "[Insert historical context here]",
    diary: [],
    letters: [],
    documents: [
      {
        title: "William Franklin to Benjamin Franklin, 22 July [–6 August] 1784",
        image: "",
        imageAlt: "",
        citation: "Franklin, William. \"William Franklin to Benjamin Franklin, 22 July [–6 August] 1784.\" Founders Online, National Archives.",
        url: "https://founders.archives.gov/documents/Franklin/01-42-02-0275",
        note: "[Insert excerpt or explanation here]"
      }
    ]
  }
];
