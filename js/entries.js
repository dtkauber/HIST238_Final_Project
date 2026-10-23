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
     context     note explaining the event (shown in side panel);
                 a single string, or an array of paragraphs
     diary       array of paragraphs; leave as [] to show a placeholder
     letters     array of { from, to, date, body }   (body: array of paragraphs)
     documents   array of { title, image, imageAlt, citation, url, note, text }
                 (text: optional array of paragraphs — a full transcription,
                  shown behind a "Read the full text" toggle)

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
    context: [
      "On November 1, 1765, the Stamp Act took effect in the American colonies. As a means to try and pay off the debt accumulated while protecting the colonies during the Seven Years’ War, the Stamp Act imposed taxes on newspapers, legal documents, and many other paper goods. After living in salutary neglect, colonists were angered by this new tax, especially since they had no direct representation in the British Parliament that enacted this law.",
      "Across the colonies, protest movements had already emerged in opposition to the Stamp Act. In Boston, the Sons of Liberty targeted tax collectors and hanged effigies as an intimidation tactic. In Philadelphia, the Pennsylvania Gazette, a newspaper run by Benjamin Franklin, was suspended in protest of the Stamp Act. One week later, Franklin's partner David Hall issued news sheets of the Gazette on unstamped paper without a masthead to avoid the legal repercussions of the law. Overall, the Stamp Act acted as the kindling for rising tensions in the American colonies before the Revolution."
    ],
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
        note: "[Insert excerpt or explanation here]",
        text: [
          "My Dear friend",
          "Thy Acceptable favour of the 19th of August I had the Pleasure of receiving, and am altogether of thy Mind that if this Meeting at New York shall be favourably look’d on by our Superiors at Home, Meetings of this kind may in future be of great service to America; And as I understand the Affairs thereat transacted, were laid before our House, at their last Meeting, and by the Committee of Correspondence transmitted to thee, I need not Point the Fact out.",
          "The mail by the September Pacquet Arrived this day, and by thy Letters We have the satisfaction of finding, that thou enjoy’d a good state of Health, and that the Petition was Lodged and on its way for determination.",
          "On the 5th. Ulto. I wrote thee a few Lines via Bristol, and therein gave thee a short Account of the Close of Our Election, which I hope thou has by this time receiv’d, being satisfied it will give thee Pleasure, and at the same time Convince [Our?] Proprietors that their new Allies, are not capable of Carrying every Point they may assure them, they can.",
          "On the Meeting of the Assembly, they thought it More Prudent to order a new Election for the City, then determine by recounting the Votes, whither J Pemberton or G Bryan, was Elected; Accordingly One was held, and the same Persons sett up, when after a fair struggle, James Pemberton was Chosen by a Majority of 171 Votes. This great disproportion is attributed, Principally to the Dutch who before Voted for G B—declining to Appear, and there being a better opportunity of Scrutinizing into the Quality of those who offered to Vote; for the Presbeterians used every Step in their Power to secure this Election, but in Vain.",
          "I cannot doubt but before this, thou art appriz’d of the Imprudent and Unwarrantable Steps, which the several Colonies have taken in Order to render the late Act of Parliment Void, which imposes the Stamp Duty upon Us, And which Steps I fear When fully known at Home, will rather tend to Injure then relieve Us; I cannot help Joining in Judgement with my Bretheren, that the Act is fundamentally Wrong both with respect to our rights as EnglishMen, [and with the] Interest of our Mother Country; In some of my former Letters I mentioned, that if they would not hear our Cries, I could not doubt, but the Parliament would pay a Regard to the Prayers of the Merchants and Manufacturers of Brittain; And in Order to obtain this desirable End, the repeal of the Stamp Act, An Association was formed this day, and Articles signd by a very great Number of the Merchants, and will be subscribed by All, enjoining, that They will not Import from Brittain any Goods or Merchandize, untill that Act be repealed, with express Orders to their several Correspondents not to Comply with the Orders heretofore sent them, of which Instruction I now enclose thee a Copy, by this Means We shall be able to plead thro’ themselves more effectual, then all We could Otherwise do: and I think this Method far more Eligible then the Conduct of all the Governments Around Us, except N Jersey.",
          "We have by this days Post receiv’d from N York most striking and disagreable Accounts which I shall only mention in the General, as I suppose thou’l have a Particular Account from thence; Its said that the Populace Assembled to the Amount of many thousands, And After having Obliged the Governor to declare He would not cause the Law to be put in Execution, they burnt his Coach and did Him other damage, and then Proceeded to one Major James’s House (who its said had been free in his Expressions respecting His being capable of Obliging the People to Obey this Act) And there destroy’d every Part of his Furniture—but all this did not suffice, they have at last obliged the Governor to give the Stamp Papers up to them, and are determined to send them back to London; this delivery We are inform’d was Advised by G[eneral] Gage, He seeing the Multitude determined, come Life come Death to have them; and by what I can learn no Condition or Quality exempted themselves from Joining in this demand.",
          "Our situation is different not but that I think, there are many among Us, who would go all these Lengths; but our being at this Juncture so Split in our Politicks, keeps the C—t P—ty and their Adherents from engaging; but how the Storm will pass over I will [not] Pretend to determine; Our Port being shut up, the Courts of Justice and every branch of the Executive part of Government at a Stand, must create most distressing Confusion.",
          "I make no doubt but our friend J— H— will give thee a detail of their Conduct towards Him, and in every Step they take they plunge themselves still further into the Mire.",
          "We hourly expect some Person or other will call on B Chew, and then it will be known What Part H[e will] Act, as He is to be Consider’d, As Probate of Wills Kings Att[orney] and recorder of this City, Our Majistrates, have not held Court since and know not what to do.",
          "Please to excuse this Letter being wrote in a great Hurry. I remain with sincere Respect thy friend",
          "Tho Wharton"
        ]
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
