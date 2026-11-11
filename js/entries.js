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
      "On November 1, 1765, the Stamp Act took effect in the American colonies. As a means to try and pay off the debt accumulated while protecting the colonies during the Seven Years’ War, the Stamp Act imposed taxes on newspapers, legal documents, and many other paper goods (Soderlund, 2022). After living in salutary neglect, colonists were angered by this new tax, especially since they had no direct representation in the British Parliament that enacted this law (Soderlund, 2022).",
      "Across the colonies, protest movements had already emerged in opposition to the Stamp Act. In Boston, the Sons of Liberty targeted tax collectors and hanged effigies as an intimidation tactic. In Philadelphia, the Pennsylvania Gazette, a newspaper run by Benjamin Franklin, was suspended in protest of the Stamp Act. One week later, Franklin's partner David Hall issued news sheets of the Gazette on unstamped paper without a masthead to avoid the legal repercussions of the law (No Stamped Paper To Be Had, 1765). Overall, the Stamp Act acted as the kindling for rising tensions in the American colonies before the Revolution."
    ],
    diary: [
      "This day hath brought much uneasiness upon my household. The inhabitants of His Majesty’s colonies find themselves much aggrieved at the news of the recent Stamp Act enacted by Parliament. Earlier this morning, many of my fellow merchants formed an agreement to not import any of His Majesty’s goods. I fear that my business now shall suffer, and that I may fail to provide for my family while this Act remains.",
      "I find myself greatly troubled that this act hath brought more trouble upon this land than is favorable for His Majesty. Correspondence from New York tells of the violent protests that have erupted in light of Parliament’s actions, and I fear that these protests may come soon to my beloved Philadelphia. The subjects of this great colony have already threatened His Majesty’s supporters, and I am troubled by the thought of my loyalty to the Crown bringing harm upon my family and property.",
      "I most certainly hope that the lords in our great Parliament reconsider this tax, and put an end to this madness soon. I dread what may yet come to pass in the meantime, and I most devoutly hope that this Act doth not lead to further troubles in His Majesty’s kingdom."
    ],
    documents: [
      {
        title: "Thomas Wharton to Benjamin Franklin, 7 November 1765",
        image: "",
        imageAlt: "",
        citation: "Wharton, Thomas. \"Thomas Wharton to Benjamin Franklin, 7 November 1765.\" Founders Online, National Archives.",
        url: "https://founders.archives.gov/documents/Franklin/01-12-02-0178",
        note: "Thomas Wharton wrote this letter to Benjamin Franklin regarding the fierce colonial response to the Stamp Act. In his letter, Wharton explains that Philadelphia merchants formed a non-importation agreement to boycott British goods in hopes of pressuring Parliament into repealing the Stamp Act. Although Wharton viewed this as a favorable approach as opposed to the violent riots breaking out in New York, Wharton remained concerned about how the Stamp Act crisis disrupted the everyday lives of colonists in Philadelphia. These disruptions included the closure of Philadelphia’s port and the suspension of court proceedings and government business.",
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
    date: "1769-03-15",
    dateLabel: "15th March, 1769",
    title: "[Entry title]",
    event: "Philadelphia merchants adopt non-importation against the Townshend Acts",
    context: [
      "In the Summer of 1767, the British Parliament passed a new set of taxes known as the Townshend Acts which imposed import duties on everyday goods like glass, paper, and tea (Soderlund, 2022). Coming after the Stamp Act’s repeal a year earlier, the Townshend Acts reignited Colonial concerns regarding their taxation without representation in the British Parliament. In response, merchants began to organize non-importation agreements, refusing to import British goods in hopes of getting Parliament to repeal yet another tax on the colonies (Soderlund, 2022).",
      "Although merchants in Boston and New York agreed to restrict British imports in 1768, Philadelphia merchants were hesitant to join the movement at first due to the potential economic consequences that it could have (Pitock, 2017; Soderlund, 2022). However, in March of 1769, Philadelphia merchants adopted their own non-importation agreement, and joined the broader colonial effort to get Parliament to repeal the Townshend Acts (Soderlund, 2022). The use of non-importation agreements throughout the colonies indicates another major increase in colonial resistance to British taxation, despite its potential impacts on the livelihoods of the merchants whose businesses depended upon trade with the British."
    ],
    diary: [],
    documents: [
      {
        title: "John Dickinson, Letters from a Farmer in Pennsylvania, Letter II (1767)",
        image: "",
        imageAlt: "",
        citation: "Dickinson, John. Letters from a Farmer in Pennsylvania, Letter II, December 10, 1767. In The Writings of John Dickinson, edited by Paul Leicester Ford, 1:312–22. Philadelphia: Historical Society of Pennsylvania, 1895. Excerpt as edited by Robert M. S. McDonald, Teaching American History.",
        url: "https://teachingamericanhistory.org/document/letters-from-a-farmer-in-pennsylvania/",
        note: "[Insert explanation here]",
        text: [
          "My dear countrymen,",
          "There is another late act of Parliament, which appears to me to be unconstitutional, and as destructive to the liberty of these colonies, as that mentioned in my last letter; that is, the act for granting the duties on paper, glass, etc.",
          "The Parliament unquestionably possesses a legal authority to regulate the trade of Great Britain, and all her colonies. Such an authority is essential to the relation between a mother country and her colonies; and necessary for the common good of all. He, who considers these provinces as states distinct from the British Empire, has very slender notions of justice, or of their interests. We are but parts of a whole; and therefore there must exist a power somewhere to preside and preserve the connection in due order. This power is lodged in the Parliament; and we are as much dependent on Great Britain, as a perfectly free people can be on another.",
          "I have looked over every statute relating to these colonies, from their first settlement to this time; and I find every one of them founded on this principle, till the Stamp Act administration. All before, are calculated to regulate trade, and preserve or promote a mutually beneficial intercourse between the several constituent parts of the empire; and though many of them imposed duties on trade, yet those duties were always imposed with design to restrain the commerce of one part, that was injurious to another, and thus to promote the general welfare. The raising a revenue thereby was never intended…. Never did the British Parliament, till the period above mentioned, think of imposing duties in America, FOR THE PURPOSE OF RAISING A REVENUE….",
          "This I call an innovation; and a most dangerous innovation. It may perhaps be objected, that Great Britain has a right to lay what duties she pleases upon her exports, and it makes no difference to us, whether they are paid here or there.",
          "To this I answer. These colonies require many things for their use, which the laws of Great Britain prohibit them from getting anywhere but from her. Such are paper and glass.",
          "That we may legally be bound to pay any general duties on these commodities, relative to the regulation of trade, is granted; but we being obliged by the laws to take from Great Britain, any special duties imposed on their exportations to us only, with intention to raise a revenue from us only, are as much taxes, upon us, as those imposed by the Stamp Act….",
          "Some persons perhaps may say, that this act lays us under no necessity to pay the duties imposed, because we may ourselves manufacture the articles on which they are laid; whereas by the Stamp Act no instrument of writing could be good, unless made on British paper, and that too stamped.",
          "Such an objection amounts to no more than this, that the injury resulting to these colonies, from the total disuse of British paper and glass, will not be so afflicting as that which would have resulted from the total disuse of writing among them; for by that means even the Stamp Act might have been eluded. Why then was it universally detested by them as slavery itself? Because it presented to these devoted provinces nothing but a choice of calamities, embittered by indignities, each of which it was unworthy of freemen to bear. But is no injury a violation of right but the greatest injury? If… eluding the payment of the taxes imposed by the Stamp Act, would have subjected us to a more dreadful inconvenience, than… eluding the payment of those imposed by the late act; does it therefore follow, that the last is no violation of our rights, though it is calculated for the same purpose the other was, that is, to raise money upon us, WITHOUT OUR CONSENT?…",
          "But the objectors may further say, that we shall suffer no injury at all by the disuse of British paper and glass. We might not, if we could make as much as we want. But can any man, acquainted with America, believe this possible? I am told there are but two or three glasshouses on this continent, and but very few paper mills; and suppose more should be erected, a long course of years must elapse, before they can be brought to perfection. This continent is a country of planters, farmers, and fishermen; not of manufacturers. The difficulty of establishing particular manufactures in such a country is almost insuperable. For one manufacture is connected with others in such a manner that it may be said to be impossible to establish one or two without establishing several others. The experience of many nations may convince us of this truth….",
          "Great Britain has prohibited the manufacturing iron and steel in these colonies, without any objection being made to her right of doing it. The like right she must have to prohibit any other manufacture among us. Thus she is possessed of an undisputed precedent on that point. This authority, she will say, is founded on the original intention of settling these colonies; that is, that we should manufacture for them, and that they should supply her with materials. The equity of this policy, she will also say, has been universally acknowledged by the colonies, who never have made the least objection to statutes for that purpose; and will further appear by the mutual benefits flowing from this usage ever since the settlement of these colonies….",
          "Here then, my dear countrymen, ROUSE yourselves, and behold the ruin hanging over your heads….",
          "Upon the whole, the single question is, whether the Parliament can legally impose duties to be paid by the people of these colonies only, FOR THE SOLE PURPOSE OF RAISING A REVENUE, on commodities which she obliges us to take from her alone, or, in other words, whether the Parliament can legally take money out of our pockets, without our consent….",
          "A Farmer"
        ]
      }
    ]
  },
  {
    id: "boston-massacre",
    date: "1770-03-05",
    dateLabel: "[Date] March, 1770",
    title: "[Entry title]",
    event: "British soldiers fire on a crowd in Boston (the Boston Massacre)",
    context: [
      "Following the passage of the Townshend Acts in 1767, the British sent around 2,000 British soldiers to Boston, Massachusetts in 1768 to enforce the law in a hub of colonial opposition and protests. Unfortunately, the presence of the British soldiers did not quell the opposition to British taxation, but it increased hostilities among the city’s inhabitants who viewed the soldiers as a direct threat to their freedom. Disputes between soldiers and civilians became common, creating a hostile environment throughout Boston.",
      "In March of 1770, tensions erupted in the city when a crowd of colonists confronted a British soldier guarding the Custom House in Boston. Amidst the shouting, insults, and objects being thrown at the soldiers, British troops fired into the crowd, killing five colonists. The circumstances surrounding the shooting remained disputed as eyewitnesses provided conflicting accounts of what transpired, particularly surrounding whether Captain Preston ordered his soldiers to fire or whether they acted independently (Zabin, 2020). Nonetheless, the incident, which became known as the Boston Massacre, further increased colonial resentment towards the British. Patriot leaders used this event as propaganda to portray the British soldiers as aggressors, strengthening opposition to Britain’s military presence in the colonies (Revere, 1770)."
    ],
    diary: [],
    documents: [
      {
        title: "Paul Revere, The Bloody Massacre Perpetrated in King Street (1770)",
        image: "images/bloody-massacre-revere-1770.jpg",
        imageAlt: "Hand-colored engraving by Paul Revere showing a line of British soldiers firing into a crowd of colonists on King Street, Boston, 1770",
        citation: "Revere, Paul. The Bloody Massacre Perpetrated in King Street Boston on March 5th 1770 by a Party of the 29th Regt. Boston: Paul Revere, 1770. Engraving with watercolor. Library of Congress Prints and Photographs Division.",
        url: "https://www.loc.gov/pictures/item/2008661777/",
        note: "[Insert explanation here]"
      }
    ]
  },
  {
    id: "tea-ship",
    date: "1773-12-27",
    dateLabel: "[Date] December, 1773",
    title: "[Entry title]",
    event: "The tea ship Polly is turned back from Philadelphia",
    context: [
      "In May of 1773, British Parliament passed the Tea Act to help the struggling British East India Company sell tea to the American colonies (Soderlund, 2022). Although the legislation lowered the price of legally imported tea to a point where it was cheaper than smuggled tea from the Netherlands, it maintained the existing tax imposed under the Townshend Acts, causing many colonists to view this as another attack by the British Parliament on the rights of colonists (Soderlund, 2022). Opposition to the Tea Act quickly spread throughout the colonies, and on December 16th, 1773, the opposition culminated in the Boston Tea Party (Soderlund, 2022).",
      "Nine days later, the British tea ship Polly, commanded by Captain Samuel Ayres, arrived in Delaware Bay carrying tea that was meant for Philadelphia (Committee for Tarring and Feathering, 1773). Upon learning of this ship’s arrival in the bay, local opponents of the Tea Act organized to prevent the cargo from reaching its destination. In a public meeting, opponents of the ship’s arrival resolved that the tea could not be unloaded in Philadelphia, and that the Polly must turn around (Committee for Tarring and Feathering, 1773; Pitock, 2017). Ayres complied with the meeting’s decision, and the Polly departed with all of its cargo."
    ],
    diary: [],
    documents: [
      {
        title: "To the Delaware Pilots (1773)",
        image: "images/delaware-pilots-1773.jpg",
        imageAlt: "Printed broadside titled To the Delaware Pilots, signed by the Committee for Tarring and Feathering, Philadelphia, 1773",
        citation: "Committee for Tarring and Feathering. To the Delaware Pilots. Philadelphia, 1773. Broadside. Library of Congress, Rare Book and Special Collections Division.",
        url: "https://www.loc.gov/item/rbpe.1430330a/",
        note: "[Insert explanation here]",
        text: [
          "TO THE DELAWARE PILOTS.",
          "THE Regard we have for your Characters, and our Desire to promote your future Peace and Safety, are the Occasion of this Third Address to you.",
          "In our second Letter we acquainted you, that the Tea Ship was a Three Decker; We are now informed by good Authority, she is not a Three Decker, but an old black Ship, without a Head, or any Ornaments.",
          "The Captain is a short fat Fellow, and a little obstinate withal.—So much the worse for him.—For, so sure as he rides rusty, We shall heave him Keel out, and see that his Bottom be well fired, scrubb'd and paid.—His Upper-Works too, will have an Overhawling—and as it is said, he has a good deal of Quick Work about him, We will take particular Care that such Part of him undergoes a thorough Rummaging.",
          "We have a still worse Account of his Owner;—for it is said, the Ship Polly was bought by him on Purpose, to make a Penny of us; and that he and Captain Ayres were well advised of the Risque they would run, in thus daring to insult and abuse us.",
          "Captain Ayres was here in the Time of the Stamp-Act, and ought to have known our People better, than to have expected we would be so mean as to suffer his rotten TEA to be funnel'd down our Throats, with the Parliament's Duty mixed with it.",
          "We know him well, and have calculated to a Gill and a Feather, how much it will require to fit him for an American Exhibition. And we hope, not one of your Body will behave so ill, as to oblige us to clap him in the Cart along Side of the Captain.",
          "We must repeat, that the SHIP POLLY is an old black Ship, of about Two Hundred and Fifty Tons burthen, without a Head, and without Ornaments,—and, that CAPTAIN AYRES is a thick chunky Fellow.—As such, TAKE CARE to AVOID THEM.",
          "Your Old Friends, The COMMITTEE FOR TARRING AND FEATHERING.",
          "Philadelphia, December 7, 1773.",
          "Monday Morning, December 27, 1773.",
          "THE TEA-SHIP being arrived, every Inhabitant, who wishes to preserve the Liberty of America, is desired to meet at the State-House, This Morning, precisely at TEN o'Clock, to advise what is best to be done on this alarming Crisis."
        ]
      }
    ]
  },
  {
    id: "continental-congress",
    date: "1774-09-05",
    dateLabel: "[Date] September, 1774",
    title: "[Entry title]",
    event: "The First Continental Congress meets at Carpenters' Hall",
    context: [
      "Following the Boston Tea Party in December of 1773, the British Parliament passed what colonists called the Intolerable Acts, a series of laws meant to punish Massachusetts for its actions (DuVal, 2026a). Among these laws, Boston Harbor was closed, and restrictions were placed on Massachusetts’ colonial government, measures intended to discourage further resistance from the Massachusetts colony (Soderlund, 2022). However, these measures managed to increase tensions between Britain and its American colonies, causing colonial leaders to begin organizing a meeting to coordinate a response to Parliament’s actions (DuVal, 2026a).",
      "On September 5, 1774, delegates from twelve of the thirteen colonies gathered in Philadelphia for the First Continental Congress (DuVal, 2026a). Although the delegates differed over the appropriate response to British policies, they wanted to protect their rights as British subjects in response to Parliament’s recent actions (DuVal, 2026b). During the multi-week meeting, the Continental Congress adopted the Continental Association to establish restrictions on trade with Great Britain, and prepared a petition to King George III to have their grievances heard (DuVal, 2026b). Although independence was not the goal of the First Continental Congress, it certainly represented a major step in the colonies’ organized resistance to the British."
    ],
    diary: [],
    documents: [
      {
        title: "The Bostonian's Paying the Excise-Man, or Tarring & Feathering (1774)",
        image: "images/bostonians-paying-the-excise-man-1774.jpg",
        imageAlt: "British cartoon showing a crowd of Bostonians forcing tea down the throat of a tarred and feathered customs officer beneath a Liberty Tree",
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
    context: [
      "In early 1775, tensions between the British and colonial resistance groups continued to rise. Following the First Continental Congress, colonial militias started to prepare for the possibility of an armed conflict by stockpiling weapons and ammunition (Soderlund, 2022). To prevent further resistance, British General Thomas Gage ordered British troops in Boston to march toward Concord, Massachusetts where colonial military supplies were reportedly being stored (DuVal, 2026b). Upon learning of the British plan, colonial riders like Paul Revere spread warnings of the approaching British soldiers, giving local militia forces time to prepare for the impending conflict.",
      "On April 19, 1775, British troops encountered a group of militiamen in Lexington, Massachusetts. Amidst the confusion of the situation, a shot was fired, and the American Revolutionary War unofficially began (DuVal, 2026b). British soldiers opened fire, killing eight colonists, before continuing towards Concord where they would encounter additional colonial resistance. The colonists forced a British retreat, but as the British moved back towards Boston, colonial militiamen repeatedly attacked them along the route, inflicting heavy casualties in the British ranks (DuVal, 2026b). These battles marked the beginning of armed conflict between Britain and its American colonies, a significant escalation from the political and economic resistance employed by the colonies in the years leading up to the event."
    ],
    diary: [],
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
    context: [
      "After the battles of Lexington and Concord, armed conflict between Britain and the American colonies had begun. Despite the ongoing fighting, many colonists still hoped that their relationship with the British Crown could be reconciled, rather than pushing for full independence. The question of whether the colonies should remain under British rule continued even as the Second Continental Congress organized resistance under the Continental Army (DuVal, 2026b). In January of 1776, Thomas Paine, who had immigrated from England in 1774, published a pamphlet titled Common Sense in Philadelphia, advocating for American independence (Soderlund, 2022).",
      "Paine’s pamphlet argued that the colonies had no reason to remain dependent upon the British government. He argued that ideas of independence and republicanism were not radical, but that they were common sense (DuVal, 2026c). By using accessible language, Paine’s arguments became understandable to ordinary colonists rather than just those who were wealthy and educated (Soderlund, 2022). The pamphlet quickly became popular, selling more than 100,000 copies (Soderlund, 2022), and it helped to spread revolutionary ideals to a broader audience. In a time of such division, Common Sense helped to broaden popular support for independence, and it represented a significant turning point in the American Revolution."
    ],
    diary: [],
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
    context: [
      "After a year of armed conflict between Britain and the American colonies, support for independence from Britain continued to grow. On July 2, 1776, the Second Continental Congress voted for independence from Britain, and on July 4, Congress adopted the Declaration of Independence (Soderlund, 2022). Primarily authored by Thomas Jefferson, the declaration outlined the colonies’ grievances with King George III and declared the thirteen colonies independent states (DuVal, 2026c).",
      "On July 8, 1776, crowds gathered in the yard of the Pennsylvania State House to hear the first public reading of the Declaration of Independence in Philadelphia. Colonel John Nixon read the document aloud and officially proclaimed the colonies separate from Great Britain (Pitock, 2017). Many colonists celebrated the news as the reading represented a significant turning point in the American Revolution, as the colonies formally announced their intention to separate from Britain. However, with the war now about independence, the divide between Patriots who supported independence and Loyalists who remained loyal to the British Crown became even greater."
    ],
    diary: [],
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
    context: [
      "After the Declaration of Independence, tensions between Patriots and Loyalists continued rising throughout the colonies. As the war continued, the rebelling colonies became more and more concerned about those who remained loyal to the British Crown, particularly in their ability to provide assistance to the British (Duffy, 2016). To limit their impact, Pennsylvania passed a law in June 1777 known as the Test Act, a law that required white men over the age of eighteen to swear allegiance to Pennsylvania, and renounce any allegiance to the British crown (Duffy, 2016).",
      "Under the Test Act, individuals who refused to take the oath would face significant restrictions on their rights as they could no longer vote, hold office, or buy and sell land (Duffy, 2016). The Test Act placed Loyalists in a difficult spot as it forced them to choose between their loyalty to Britain and the rights they possessed in Pennsylvania. The Test Act served as yet another example of the growing division between Patriots and Loyalists at the time of the Revolution and it demonstrated the risks associated with supporting Britain in their efforts."
    ],
    diary: [],
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
    context: [
      "After the Declaration of Independence in 1776, the British looked to suppress the rebellion and regain control of their colonies. In 1777, British General William Howe started a campaign to capture Philadelphia, the location of the Continental Congress and a center of the colonies’ resistance (Soderlund, 2022). Howe’s forces defeated General George Washington’s army at the Battle of Brandywine, granting the British a path to Philadelphia (Soderlund, 2022). As the British approached, the Continental Congress and many Patriots fled the city out of fear of living under British occupation (Soderlund, 2022).",
      "In late September of 1777, the British marched into Philadelphia and took control of the city (Soderlund, 2022). While many Patriots fled, the Loyalists remaining in the city welcomed the arrival of British forces, and hoped that their occupation would restore order and bring the rebellion to a close. However, even though capturing Philadelphia represented a major victory for Britain, the Continental Army remained intact, allowing the colonies to continue their resistance (Soderlund, 2022)."
    ],
    diary: [],
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
    context: [
      "After capturing the city in September 1777, the British occupied Philadelphia for roughly nine months (Soderlund, 2022). However, despite controlling the center of the colonial rebellion, the British had failed to eliminate George Washington’s Continental Army, allowing the rebellion to continue (Soderlund, 2022). Additionally, with the American victory at Saratoga in October 1777, the French entered the war on the side of the Americans in 1778 (Soderlund, 2022). With impending French military and naval involvement, the British reconsidered their strategy, deciding to concentrate their forces in New York City instead of continuing their occupation of Philadelphia (Soderlund, 2022).",
      "On June 18, 1778, the British under General Henry Clinton evacuated Philadelphia and began their trek towards New York City (Soderlund, 2022). Fearing persecution from returning Patriot forces, thousands of Loyalists fled Philadelphia, seeking refuge with British forces in New York (Duffy, 2016). After the British evacuation, Patriot forces regained control of Philadelphia, and the Continental Congress was able to resume meeting normally. For the Loyalists who stayed in Philadelphia, their safety was put at great risk as they would once again be vulnerable to persecution from the returning Patriots (Duffy, 2016)."
    ],
    diary: [],
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
    context: [
      "After Patriot authorities reclaimed Philadelphia in 1778, they began to investigate Philadelphians who were suspected of aiding the British forces during their occupation of the city (Duffy, 2016). Among the accused were Abraham Carlisle, a Quaker carpenter who served under the British as a gatekeeper, and John Roberts, a Quaker mill owner who was believed to have assisted with British military operations (Duffy, 2016). Carlisle was responsible for granting passage to those traveling through British lines while Roberts was accused of guiding British forces and convincing individuals to join the British ranks (Duffy, 2016). Both men were arrested and charged with treason for their cooperation with the British (Duffy, 2016).",
      "On November 4, 1778, Carlisle and Roberts were hanged in Philadelphia after being convicted of treason (Duffy, 2016; Galloway, 1931). The executions sparked massive controversy as Philadelphia residents petitioned for the men to be granted pardons. However, Pennsylvania’s government refused, and the men were executed despite these appeals (Duffy, 2016). Carlisle and Roberts were among the few individuals executed for treason in Pennsylvania during the war, showing just how harsh their punishment truly was. Their deaths became a symbol of the dire consequences associated with supporting the British in the war, and gave Loyalists yet another reason to fear for their safety in Philadelphia following the executions."
    ],
    diary: [],
    documents: [
      {
        title: "Diary of Grace Growden Galloway (1778–79)",
        image: "",
        imageAlt: "",
        citation: "Galloway, Grace Growden. \"Diary of Grace Growden Galloway.\" Edited by Raymond C. Werner. Pennsylvania Magazine of History and Biography 55, no. 1 (1931): 32–94, at 56.",
        url: "https://journals.psu.edu/pmhb/article/download/28217/27973",
        note: "[Insert explanation here]",
        text: [
          "November ye 4th 1778",
          "This day John Roberts, & Abraham Carlile ware executed: all things are gloomy went to Neighbour Eddy's she came home to Night but I was call'd home to see ben Chew, but his behavior was so cold Nay disrespectful to Me that I was quite shocked: & wished I had not seen him he has alter'd ever since Mr G was going home in short he was scarce civil I have no friends"
        ]
      }
    ]
  },
  {
    id: "yorktown",
    date: "1781-10-24",
    dateLabel: "[Date] October, 1781",
    title: "[Entry title]",
    event: "News of Cornwallis's surrender at Yorktown reaches Philadelphia",
    context: [
      "By 1781, the Revolutionary War had been ongoing for more than six years. In the South, British General Charles Cornwallis led military campaigns that resulted in significant casualties at skirmishes like the Battle of Cowpens and the Battle of Guilford Courthouse (DuVal, 2026d). Following such costly campaigns, Cornwallis settled in Yorktown, Virginia as he awaited reinforcements from the British troops in New York. However, over 16,000 combined American and French forces under George Washington and Comte de Rochambeau marched to Virginia and surrounded Cornwallis (DuVal, 2026d). At the same time, the French navy gained control of the Chesapeake Bay, preventing the British from assisting Cornwallis by sea (DuVal, 2026d).",
      "On October 19, 1781, after a multi-week siege filled with bombardment from the American and French forces, Cornwallis surrendered (Articles of Capitulation, 1781). With the British surrender, thousands of British soldiers became prisoners of war (Articles of Capitulation, 1781), a devastating blow to their military campaign in North America. Although the war did not immediately end after Cornwallis’ surrender, fighting between the British and the American colonies mostly came to a close and British leaders began pursuing peace negotiations."
    ],
    diary: [],
    documents: [
      {
        title: "Articles of Capitulation, Yorktown, 19 October 1781",
        image: "",
        imageAlt: "",
        citation: "\"Articles of Capitulation; October 18, 1781.\" The Avalon Project, Lillian Goldman Law Library, Yale Law School.",
        url: "https://avalon.law.yale.edu/18th_century/art_of_cap_1781.asp",
        note: "[Insert explanation here]",
        text: [
          "Articles of Capitulation",
          "Settled between his Excellency General Washington, Commander-in-Chief of the combined Forces of America and France; his Excellency the Count de Rochambeau, Lieutenant-General of the Armies of the King of France, Great Cross of the royal and military Order of St. Louis, commanding the auxiliary troops of his Most Christian Majesty in America; and his Excellency the Count de Grasse, Lieutenant-General of the Naval Armies of his Most Christian Majesty, Commander of the Order of St. Louis, Commander-in-Chief of the Naval Army of France in the Chesapeake, on the one Part; and the Right Honorable Earl Cornwallis, Lieutenant-General of his Britannic Majesty's Forces, commanding the Garrisons of York and Gloucester; and Thomas Symonds, Esquire, commanding his Britannic Majesty's Naval Forces in York River in Virginia, on the other Part.",
          "Article I. The garrisons of York and Gloucester, including the officers and seamen of his Britannic Majesty's ships, as well as other mariners, to surrender themselves prisoners of war to the combined forces of America and France. The land troops to remain prisoners to the United States, the navy to the naval army of his Most Christian Majesty.",
          "Article II. The artillery, arms, accoutrements, military chest, and public stores of every denomination, shall be delivered unimpaired to the heads of departments appointed to receive them.",
          "Article III. At twelve o'clock this day the two redoubts on the left flank of York to be delivered, the one to a detachment of American infantry, the other to a detachment of French grenadiers.",
          "The garrison of York will march out to a place to be appointed in front of the posts, at two o'clock precisely, with shouldered arms, colors cased, and drums beating a British or German march. They are then to ground their arms, and return to their encampments, where they will remain until they are despatched to the places of their destination. Two works on the Gloucester side will be delivered at one o'clock to a detachment of French and American troops appointed to possess them. The garrison will march out at three o'clock in the afternoon; the cavalry with their swords drawn, trumpets sounding, and the infantry in the manner prescribed for the garrison of York. They are likewise to return to their encampments until they can be finally marched off.",
          "Article IV. Officers are to retain their side-arms. Both officers and soldiers to keep their private property of every kind; and no part of their baggage or papers to be at any time subject to search or inspection. The baggage and papers of officers and soldiers taken during the siege to be likewise preserved for them.",
          "It is understood that any property obviously belonging to the inhabitants of these States, in the possession of the garrison, shall be subject to be reclaimed.",
          "Article V. The soldiers to be kept in Virginia, Maryland, or Pennsylvania, and as much by regiments as possible, and supplied with the same rations of provisions as are allowed to soldiers in the service of America. A field-officer from each nation, to wit, British, Anspach, and Hessian, and other officers on parole, in the proportion of one to fifty men to be allowed to reside near their respective regiments, to visit them frequently, and be witnesses of their treatment; and that their officers may receive and deliver clothing and other necessaries for them, for which passports are to be granted when applied for.",
          "Article VI. The general, staff, and other officers not employed as mentioned in the above articles, and who choose it, to be permitted to go on parole to Europe, to New York, or to any other American maritime posts at present in the possession of the British forces, at their own option; and proper vessels to be granted by the Count de Grasse to carry them under flags of truce to New York within ten days from this date, if possible, and they to reside in a district to be agreed upon hereafter, until they embark. The officers of the civil department of the army and navy to be included in this article. Passports to go by land to be granted to those to whom vessels cannot be furnished.",
          "Article VII. Officers to be allowed to keep soldiers as servants, according to the common practice of the service. Servants not soldiers are not to be considered as prisoners, and are to be allowed to attend their masters.",
          "Article VIII. The Bonetta sloop-of-war to be equipped, and navigated by its present captain and crew, and left entirely at the disposal of Lord Cornwallis from the hour that the capitulation is signed, to receive an aid-de-camp to carry despatches to Sir Henry Clinton; and such soldiers as he may think proper to send to New York, to be permitted to sail without examination. When his despatches are ready, his Lordship engages on his part, that the ship shall be delivered to the order of the Count de Grasse, if she escapes the dangers of the sea. That she shall not carry off any public stores. Any part of the crew that may be deficient on her return, and the soldiers passengers, to be accounted for on her delivery.",
          "Article IX. The traders are to preserve their property, and to be allowed three months to dispose of or remove them; and those traders are not to be considered as prisoners of war. The traders will be allowed to dispose of their effects, the allied army having the right of preemption. The traders to be considered as prisoners of war upon parole.",
          "Article X. Natives or inhabitants of different parts of this country, at present in York or Gloucester, are not to be punished on account of having joined the British army.",
          "This article cannot be assented to, being altogether of civil resort.",
          "Article XI. Proper hospitals to be furnished for the sick and wounded. They are to be attended by their own surgeons on parole; and they are to be furnished with medicines and stores from the American hospitals.",
          "The hospital stores now at York and Gloucester shall be delivered for the use of the British sick and wounded. Passports will be granted for procuring them further supplies from New York, as occasion may require; and proper hospitals will be furnished for the reception of the sick and wounded of the two garrisons.",
          "Article XII. Wagons to be furnished to carry the baggage of the officers attending the soldiers, and to surgeons when traveling on account of the sick, attending the hospitals at public expense.",
          "They are to be furnished if possible.",
          "Article XIII. The shipping and boats in the two harbours, with all their stores, guns, tackling, and apparel, shall be delivered up in their present state to an officer of the navy appointed to take possession of them, previously unloading the private property, part of which had been on board for security during the siege.",
          "Article XIV. No article of capitulation to be infringed on pretence of reprisals; and if there be any doubtful expressions in it, they are to be interpreted according to the common meaning and acceptation of the words.",
          "Done at Yorktown, in Virginia, October 19th, 1781.",
          "Cornwallis, Thomas Symonds.",
          "Done in the Trenches before Yorktown, in Virginia, October 19th, 1781.",
          "George Washington,",
          "Le Comte de Rochambeau,",
          "Le Comte de Barras,",
          "En mon nom & celui du Comte de Grasse."
        ]
      }
    ]
  },
  {
    id: "peace",
    date: "1783-09-03",
    dateLabel: "[Date] September, 1783",
    title: "[Entry title]",
    event: "The Treaty of Paris ends the war",
    context: [
      "After their defeat at the Battle of Yorktown in October 1781, support in Britain for continuing the Revolutionary War effort was dwindling (Peplow, 2013). Although the war did continue through smaller battles in the West Indies and other parts of North America, Cornwallis’ defeat caused British leaders to negotiate for peace (Peplow, 2013). Negotiations between British and American representatives began in Paris in 1782, and the two sides reached a preliminary agreement in November of the same year (Paris Peace Treaty, 1783).",
      "On September 3, 1783, representatives from both sides officially signed the Treaty of Paris, and the American Revolution formally ended (Paris Peace Treaty, 1783). In the treaty, the British officially recognized the United States as an independent nation, and recognized US territory extending westward to the Mississippi River (Paris Peace Treaty, 1783; Soderlund, 2022). The treaty also protected Loyalists as Congress agreed to prevent any further persecution for their allegiance during the Revolution and recommend that state governments restore Loyalist property (Paris Peace Treaty, 1783). However, this restoration was not guaranteed, and as a result, many of the remaining Loyalists who decided not to reintegrate into American life fled to Britain or one of its remaining colonies (Duffy, 2016)."
    ],
    diary: [],
    documents: [
      {
        title: "The Definitive Treaty of Peace (Treaty of Paris), 3 September 1783",
        image: "images/treaty-of-paris-1783-signature-page.jpg",
        imageAlt: "Final page of the handwritten Treaty of Paris, 1783, with the signatures and wax seals of David Hartley, John Adams, Benjamin Franklin, and John Jay",
        citation: "\"The Paris Peace Treaty of September 3, 1783.\" The Avalon Project, Lillian Goldman Law Library, Yale Law School. Image: final page of the treaty, General Records of the United States Government, National Archives.",
        url: "https://avalon.law.yale.edu/18th_century/paris.asp",
        note: "[Insert explanation here]",
        text: [
          "The Definitive Treaty of Peace 1783",
          "In the name of the most holy and undivided Trinity.",
          "It having pleased the Divine Providence to dispose the hearts of the most serene and most potent Prince George the Third, by the grace of God, king of Great Britain, France, and Ireland, defender of the faith, duke of Brunswick and Lunebourg, arch-treasurer and prince elector of the Holy Roman Empire etc., and of the United States of America, to forget all past misunderstandings and differences that have unhappily interrupted the good correspondence and friendship which they mutually wish to restore, and to establish such a beneficial and satisfactory intercourse , between the two countries upon the ground of reciprocal advantages and mutual convenience as may promote and secure to both perpetual peace and harmony; and having for this desirable end already laid the foundation of peace and reconciliation by the Provisional Articles signed at Paris on the 30th of November 1782, by the commissioners empowered on each part, which articles were agreed to be inserted in and constitute the Treaty of Peace proposed to be concluded between the Crown of Great Britain and the said United States, but which treaty was not to be concluded until terms of peace should be agreed upon between Great Britain and France and his Britannic Majesty should be ready to conclude such treaty accordingly; and the treaty between Great Britain and France having since been concluded, his Britannic Majesty and the United States of America, in order to carry into full effect the Provisional Articles above mentioned, according to the tenor thereof, have constituted and appointed, that is to say his Britannic Majesty on his part, David Hartley, Esqr., member of the Parliament of Great Britain, and the said United States on their part, John Adams, Esqr., late a commissioner of the United States of America at the court of Versailles, late delegate in Congress from the state of Massachusetts, and chief justice of the said state, and minister plenipotentiary of the said United States to their high mightinesses the States General of the United Netherlands; Benjamin Franklin, Esqr., late delegate in Congress from the state of Pennsylvania, president of the convention of the said state, and minister plenipotentiary from the United States of America at the court of Versailles; John Jay, Esqr., late president of Congress and chief justice of the state of New York, and minister plenipotentiary from the said United States at the court of Madrid; to be plenipotentiaries for the concluding and signing the present definitive treaty; who after having reciprocally communicated their respective full powers have agreed upon and confirmed the following articles.",
          "Article 1: His Brittanic Majesty acknowledges the said United States, viz., New Hampshire, Massachusetts Bay, Rhode Island and Providence Plantations, Connecticut, New York, New Jersey, Pennsylvania, Maryland, Virginia, North Carolina, South Carolina and Georgia, to be free sovereign and independent states, that he treats with them as such, and for himself, his heirs, and successors, relinquishes all claims to the government, propriety, and territorial rights of the same and every part thereof.",
          "Article 2: And that all disputes which might arise in future on the subject of the boundaries of the said United States may be prevented, it is hereby agreed and declared, that the following are and shall be their boundaries, viz.; from the northwest angle of Nova Scotia, viz., that angle which is formed by a line drawn due north from the source of St. Croix River to the highlands; along the said highlands which divide those rivers that empty themselves into the river St. Lawrence, from those which fall into the Atlantic Ocean, to the northwesternmost head of Connecticut River; thence down along the middle of that river to the forty-fifth degree of north latitude; from thence by a line due west on said latitude until it strikes the river Iroquois or Cataraquy; thence along the middle of said river into Lake Ontario; through the middle of said lake until it strikes the communication by water between that lake and Lake Erie; thence along the middle of said communication into Lake Erie, through the middle of said lake until it arrives at the water communication between that lake and Lake Huron; thence along the middle of said water communication into Lake Huron, thence through the middle of said lake to the water communication between that lake and Lake Superior; thence through Lake Superior northward of the Isles Royal and Phelipeaux to the Long Lake; thence through the middle of said Long Lake and the water communication between it and the Lake of the Woods, to the said Lake of the Woods; thence through the said lake to the most northwesternmost point thereof, and from thence on a due west course to the river Mississippi; thence by a line to be drawn along the middle of the said river Mississippi until it shall intersect the northernmost part of the thirty-first degree of north latitude, South, by a line to be drawn due east from the determination of the line last mentioned in the latitude of thirty-one degrees of the equator, to the middle of the river Apalachicola or Catahouche; thence along the middle thereof to its junction with the Flint River, thence straight to the head of Saint Mary's River; and thence down along the middle of Saint Mary's River to the Atlantic Ocean; east, by a line to be drawn along the middle of the river Saint Croix, from its mouth in the Bay of Fundy to its source, and from its source directly north to the aforesaid highlands which divide the rivers that fall into the Atlantic Ocean from those which fall into the river Saint Lawrence; comprehending all islands within twenty leagues of any part of the shores of the United States, and lying between lines to be drawn due east from the points where the aforesaid boundaries between Nova Scotia on the one part and East Florida on the other shall, respectively, touch the Bay of Fundy and the Atlantic Ocean, excepting such islands as now are or heretofore have been within the limits of the said province of Nova Scotia.",
          "Article 3: It is agreed that the people of the United States shall continue to enjoy unmolested the right to take fish of every kind on the Grand Bank and on all the other banks of Newfoundland, also in the Gulf of Saint Lawrence and at all other places in the sea, where the inhabitants of both countries used at any time heretofore to fish. And also that the inhabitants of the United States shall have liberty to take fish of every kind on such part of the coast of Newfoundland as British fishermen shall use, (but not to dry or cure the same on that island) and also on the coasts, bays and creeks of all other of his Brittanic Majesty's dominions in America; and that the American fishermen shall have liberty to dry and cure fish in any of the unsettled bays, harbors, and creeks of Nova Scotia, Magdalen Islands, and Labrador, so long as the same shall remain unsettled, but so soon as the same or either of them shall be settled, it shall not be lawful for the said fishermen to dry or cure fish at such settlement without a previous agreement for that purpose with the inhabitants, proprietors, or possessors of the ground.",
          "Article 4: It is agreed that creditors on either side shall meet with no lawful impediment to the recovery of the full value in sterling money of all bona fide debts heretofore contracted.",
          "Article 5: It is agreed that Congress shall earnestly recommend it to the legislatures of the respective states to provide for the restitution of all estates, rights, and properties, which have been confiscated belonging to real British subjects; and also of the estates, rights, and properties of persons resident in districts in the possession on his Majesty's arms and who have not borne arms against the said United States. And that persons of any other decription shall have free liberty to go to any part or parts of any of the thirteen United States and therein to remain twelve months unmolested in their endeavors to obtain the restitution of such of their estates, rights, and properties as may have been confiscated; and that Congress shall also earnestly recommend to the several states a reconsideration and revision of all acts or laws regarding the premises, so as to render the said laws or acts perfectly consistent not only with justice and equity but with that spirit of conciliation which on the return of the blessings of peace should universally prevail. And that Congress shall also earnestly recommend to the several states that the estates, rights, and properties, of such last mentioned persons shall be restored to them, they refunding to any persons who may be now in possession the bona fide price (where any has been given) which such persons may have paid on purchasing any of the said lands, rights, or properties since the confiscation.",
          "And it is agreed that all persons who have any interest in confiscated lands, either by debts, marriage settlements, or otherwise, shall meet with no lawful impediment in the prosecution of their just rights.",
          "Article 6: That there shall be no future confiscations made nor any prosecutions commenced against any person or persons for, or by reason of, the part which he or they may have taken in the present war, and that no person shall on that account suffer any future loss or damage, either in his person, liberty, or property; and that those who may be in confinement on such charges at the time of the ratification of the treaty in America shall be immediately set at liberty, and the prosecutions so commenced be discontinued.",
          "Article 7: There shall be a firm and perpetual peace between his Brittanic Majesty and the said states, and between the subjects of the one and the citizens of the other, wherefore all hostilities both by sea and land shall from henceforth cease. All prisoners on both sides shall be set at liberty, and his Brittanic Majesty shall with all convenient speed, and without causing any destruction, or carrying away any Negroes or other property of the American inhabitants, withdraw all his armies, garrisons, and fleets from the said United States, and from every post, place, and harbor within the same; leaving in all fortifications, the American artilery that may be therein; and shall also order and cause all archives, records, deeds, and papers belonging to any of the said states, or their citizens, which in the course of the war may have fallen into the hands of his officers, to be forthwith restored and delivered to the proper states and persons to whom they belong.",
          "Article 8: The navigation of the river Mississippi, from its source to the ocean, shall forever remain free and open to the subjects of Great Britain and the citizens of the United States.",
          "Article 9: In case it should so happen that any place or territory belonging to Great Britain or to the United States should have been conquered by the arms of either from the other before the arrival of the said Provisional Articles in America, it is agreed that the same shall be restored without difficulty and without requiring any compensation.",
          "Article 10: The solemn ratifications of the present treaty expedited in good and due form shall be exchanged between the contracting parties in the space of six months or sooner, if possible, to be computed from the day of the signatures of the present treaty. In witness whereof we the undersigned, their ministers plenipotentiary, have in their name and in virtue of our full powers, signed with our hands the present definitive treaty and caused the seals of our arms to be affixed thereto.",
          "Done at Paris, this third day of September in the year of our Lord, one thousand seven hundred and eighty-three.",
          "D. HARTLEY (SEAL)",
          "JOHN ADAMS (SEAL)",
          "B. FRANKLIN (SEAL)",
          "JOHN JAY (SEAL)"
        ]
      }
    ]
  },
  {
    id: "exile",
    date: "1784-08-06",
    dateLabel: "[Date], 1784",
    title: "[Entry title]",
    event: "Loyalists leave the United States after the war",
    context: [
      "Following the conclusion of the Revolutionary War in 1783, Loyalists faced uncertainty about their future in the newly formed United States. Throughout the Revolution, Loyalists were subject to heavy persecution including violence, imprisonment, and confiscation of their property (DuVal, 2026a; Duffy, 2016). Although the Treaty of Paris promised an end to further persecutions and confiscations, many Loyalists remained concerned about their safety and their ability to reintegrate into the newly independent country (Paris Peace Treaty, 1783; Duffy, 2016). As a result, thousands of Loyalists remaining in the colonies at the end of the war decided to flee from the United States and pursue new lives under British rule (Duffy, 2016).",
      "Many Loyalists relocated to areas of British North America while others traveled across the Atlantic to the English mainland in hopes of rebuilding their lives in the country they so devoutly supported throughout the war. However, having abandoned much of their property and wealth, many Loyalists would struggle in their new homes as they had difficulties finding employment, rebuilding their businesses, or recovering the wealth they had lost during the war. Overall, the British loss during the American Revolution had devastating consequences for Loyalists, and forced them to rebuild their lives in completely new surroundings."
    ],
    diary: [],
    documents: [
      {
        title: "William Franklin to Benjamin Franklin, 22 July [–6 August] 1784",
        image: "",
        imageAlt: "",
        citation: "Franklin, William. \"William Franklin to Benjamin Franklin, 22 July [–6 August] 1784.\" Founders Online, National Archives. Transcription via Teaching American History.",
        url: "https://founders.archives.gov/documents/Franklin/01-42-02-0275",
        note: "[Insert explanation here]",
        text: [
          "Dear and Honoured Father,",
          "Ever since the Termination of the unhappy Contest between Great Britain and America, I have been anxious to write to you, and to endeavour to revive that affectionate Intercourse and Connexion which till the Commencement of the late Troubles had been the Pride and Happiness of my Life. Uncertain, however, whether the decided and active Part I took in Opposition to the Measures you thought proper to adopt, might not have left some unfavourable Impressions on your Mind; or, if that should not be the Case, whether you might not have some political Reasons for avoiding such Correspondence while you retained your present Employ under the Congress, I was induced to postpone my Intention of writing till I could by some Means or other learn whether your Inclinations were likely to meet my Wishes in that respect. I was, besides, led to expect an Opportunity of a personal Interview from the Accounts I frequently heard from some of your Friends in London, and particularly from a Letter which Temple wrote to Mr. Whitefoord about a Twelvemonth ago, intimating that you had Thoughts of soon returning to America, and would probably visit England in your Way. In that Letter he likewise mentioned that he should have wrote to me, but that he was apprehensive it might, if known, excite Suspicions among some jealous People for whom you acted. This was an additional Motive for my delaying to write, as the Reason he gave why it was improper for him to write to me, operated equally against my writing to you or him, while in your present Situation. There are narrow illiberal Minds in all Parties. In that which I took, and on whose Account I have so much suffered, there have not been wanting some who have insinuated that my Conduct has been founded on Collusion with you, that one of us might succeed which ever Party should prevail. Similar Collusions, they say, were known to have existed between Father and Son during the civil Wars in England and Scotland. The Falsity of such Insinuation in our Case you well know, and I am happy that I can with Confidence appeal not only to you but to my God, that I have uniformly acted from a strong Sense of what I conceived my Duty to my King, and Regard to my Country, required. If I have been mistaken, I cannot help it. It is an Error of Judgment that the maturest Reflection I am capable of cannot recify; and I verily believe were the same Circumstances to occur again Tomorrow, my Conduct would be exactly similar to what it was heretofore, notwithstanding the cruel Sufferings, scandalous Neglects, and Ill-treatment which we poor unfortunate Loyalists have in general experienced.— On a Subject so disagreeable I have no Desire to say more, and I hope every thing which has happened relative to it may be mutually forgotten. Encouraged by what passed lately between you, and that good-hearted Man Colonel Wadsworth, I flatter myself that you are actuated by the same Disposition, and that my Advances towards a Renewal of our former affectionate Intercourse will be as acceptable to you as they are agreeable to myself.",
          "It gave me great Pleasure to hear from the Colonel, Mrs. Montgomery, and others, that my Son, who owes so much to you for his Education and other Advantages, has conducted himself to your Satisfaction. The Character given of him by a Variety of Persons who have known him at Paris does him great Credit, and cannot fail to heighthen that natural Affection which always interests me in whatever concerns his Welfare. Please to give my Love to him, and let him know that I wish he would write to me soon, and inform me whether he received a Letter from Mr. Galloway some Months ago, inclosing a Paper belonging to you, as Mr. G is uneasy lest it has miscarried.",
          "Now I have broken the Ice, many Things occur which I much want an Opportunity to mention; too many, indeed, for the Limits of a Letter, and some of them respecting private Family Affairs, of a very important Nature, that cannot well be adjusted without a personal Interview. I shall therefore, if you are not likely to be soon in England, be happy to have your Approbation to wait on you at Paris. In the mean Time I beg you to be assured of my constant Prayers for your Health and Happiness, and that I am, as ever,",
          "Your very dutiful and affectionate Son"
        ]
      }
    ]
  }
];
