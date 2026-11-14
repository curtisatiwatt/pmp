/* Original English translations. Canonical IDs and answer ordering are unchanged. */
(() => {
'use strict';
window.PMP_EN=window.PMP_EN||{questions:{},lessons:{},weeks:{},sources:{}};
const questions={};
function q(id,topic,difficulty,stem,options,answer,explanation,wrong){let n=0;questions[id]={topic,difficulty,stem,options,explanation,eliminations:options.map((_,i)=>i===answer?explanation:wrong[n++])};}
q('b001','Negotiating with clinical stakeholders','Advanced',
"On a hospital electronic health record project, physicians want voice entry released first, while nurses consider medication reconciliation more urgent. Both features need the same development team. How should the project manager facilitate prioritization?",
["Jointly assess safety, value, and cost, then have the product owner order the work.","Ask the clinical committee to vote, then have the product owner implement the majority decision.","Have the team estimate both features and implement the one requiring fewer hours first.","Arrange separate departmental trials and rank features by physician and nurse satisfaction."],0,
"Shared decision criteria can move stakeholders beyond departmental positions. The product owner remains accountable for backlog ordering, while the team contributes feasibility information.",
["A vote can inform the decision, but it cannot replace shared value criteria or turn the product owner's accountability into mechanical execution.","Effort is one consideration. Prioritizing solely by lower effort may overlook patient safety and business value.","Trials consume resources without resolving the immediate delivery priority. Departmental satisfaction is not the only measure of value."]);
q('b002','Cross-disciplinary conflict','Foundation',
"On a bridge project, the structural engineer and construction supervisor argue about the construction sequence and begin blaming each other. There is no immediate safety hazard. What should the project manager do first?",
["Check the responsibility matrix and resolve the matter according to final site authority.","Stop the personal accusations, clarify the shared goal, and discuss constraints using facts.","Interview each person separately, then ask the design authority to determine the sequence.","Ask both parties to compromise by alternating between their proposed sequences."],1,
"First restore respectful, fact-based communication, then address the technical disagreement. Resolving the underlying cause collaboratively supports execution better than suppressing opinions.",
["Authority can clarify who decides, but relying on command alone will not resolve personal accusations or disagreement about facts.","Technical authorities can help, but ruling before the parties understand the constraints does not address the conflict's cause.","A compromise requires technical justification. Construction sequencing cannot be split mechanically merely to avoid conflict."]);
q('b003','Fairness in distributed teams','Foundation',
"A fintech team works across Toronto and Singapore. Regular meetings consistently require Singapore members to attend late at night, and they have recently stopped contributing much. What should the agile coach do?",
["Halve the meeting duration while keeping the same time to preserve the team's rhythm.","Schedule one Singapore-friendly meeting each month and keep the other meeting times unchanged.","Agree on rotating meeting times and use asynchronous channels to gather decision input.","Keep the current meetings and send recordings so Singapore members can comment afterward."],2,
"Reduced participation may reflect an unfair collaboration arrangement. Rotating times and allowing asynchronous input support both connection and sustainable working patterns across locations.",
["Shorter meetings reduce some burden but do not resolve the ongoing time-zone inequity.","An occasional adjustment does not establish a sustainable, fair collaboration arrangement.","Recordings improve access to information, but the same region still carries the late-night meeting burden."]);
q('b004','Delegation and boundaries','Advanced',
"A coordinator on a nonprofit fundraising project waits for the project manager's approval for every volunteer shift change, slowing responses. These changes affect neither the budget nor service standards. What should the manager do?",
["Create a batch approval list and review every shift change once a day.","Have a senior coordinator screen changes, with the manager approving only disputed ones.","Require two proposed solutions for each change and delegate after decision skills improve.","Clarify decision and escalation boundaries, delegate shift changes, and agree on feedback."],3,
"Effective delegation combines clear boundaries, appropriate capability, and feedback. Delegating low-risk routine decisions improves responsiveness while retaining necessary governance.",
["Batch approval may be faster, but it retains the management bottleneck for low-risk decisions.","Adding a screening layer does not give decision authority to the person doing the work.","The task is already described as low risk. Requiring proposals for each change prolongs dependence; support can accompany delegation."]);
q('b005','Performance coaching','Foundation',
"An experienced researcher on a laboratory project has delivered two analysis reports late. The project manager has not yet investigated the reasons. What should the manager do first?",
["Privately explore the reasons for the delays and agree on specific improvement actions.","Reassign upcoming reports first to protect the schedule, then discuss the causes.","Request a written corrective action plan and review it with the researcher.","Check performance records with the functional manager before arranging formal coaching."],0,
"Use specific, respectful feedback to identify capability, resource, or priority constraints before agreeing on a measurable improvement plan. Results alone do not establish someone's attitude.",
["First understand resource or priority barriers. Reassigning work immediately may hide the cause and burden others.","Demanding corrective actions before understanding the cause may misclassify a systemic barrier as individual poor performance.","The observed deviations provide a basis for direct, respectful discussion; historical ratings need not come first."]);
q('b006','Servant leadership','Foundation',
"The development team's test environment fails twice a week, preventing it from meeting iteration goals. Which project manager response best demonstrates servant leadership?",
["Have the team assess alternative testing tools before deciding whether to involve operations.","Coordinate removal of the environment impediment and help the team develop temporary mitigations.","Reduce iteration commitments first and include the weekly outages in available capacity.","Introduce daily environment checks and rotate recovery responsibility among team members."],1,
"Servant leadership removes impediments to delivery while helping the team solve problems. Environment failures call for cross-team coordination rather than simply shifting responsibility to affected members.",
["Alternatives can be explored in parallel; they should not delay coordination on the known cross-team problem.","Capacity adjustments may reflect current conditions, but they do not replace removing a recurring impediment.","Checks help detect failures, but the affected team may lack the skills or authority to own recovery."]);
q('b007','Psychological safety','Advanced',
"A new employee on a medical device team delays reporting an unsatisfactory validation result because they fear blame. Which long-term improvement should the project manager make?",
["Make reporting deadlines performance targets and use report counts to identify low participation.","Allow results to be shared only after the validation lead completes an initial analysis.","Establish timely reporting channels, encourage fact-based learning, and retain quality accountability.","Use anonymous reporting, with the project manager screening information before sharing it."],2,
"Psychological safety enables honest reporting without removing accountability. Safe reporting channels and systemic improvement help expose risks earlier.",
["Metrics and punishment-oriented reporting can intensify anxiety rather than resolve fear of blame.","Waiting for complete analysis may delay disclosure of an important risk.","Anonymity can help, but manager-only screening creates another bottleneck and cannot alone establish an open learning culture."]);
q('b008','Stakeholder engagement','Foundation',
"A municipal water upgrade has regulatory approval, but residents affected by construction object to the planned working hours. What should the project manager do next?",
["Explain the approval basis first, then ask residents to acknowledge the construction notice.","Ask community representatives for compensation requests and prepare a package within budget.","Have municipal communications respond to complaints while construction follows the approved plan.","Understand residents' actual impacts, evaluate adjustments, and update the engagement strategy."],3,
"Regulatory approval does not replace ongoing stakeholder engagement. Understanding concrete impacts, such as noise and access, makes practical mitigation possible.",
["Explaining the approval is useful, but without understanding the impacts it risks becoming one-way communication.","Compensation is one possible response; do not assume the concerns are purely financial before understanding them.","Communications staff can help, but the project still needs to assess construction impacts and feasible adjustments."]);
q('b009','Preparing for negotiation','Advanced',
"A nonprofit is preparing to negotiate a venue's event-postponement fees. The project manager has a limited budget. What should the manager prepare first?",
["Clarify both parties' interests, authority limits, and alternatives, then develop a negotiation strategy.","Set a maximum payment and keep all proposals below that amount.","Collect other venue quotes and use the lowest as the negotiation target.","Ask legal counsel to list contractual rights and base the final position on the strongest clause."],0,
"Effective negotiation requires understanding interests, authority, and alternatives if agreement is not reached. Preparation supports both the relationship and project constraints.",
["A price ceiling is only one element. Focusing solely on price may miss trades involving dates or services.","Alternative quotes are useful, but they may not reflect contract terms or actual switching costs.","Contractual rights matter, but they do not replace preparation around interests, relationships, and feasible alternatives."]);
q('b010','Onboarding new team members','Foundation',
"Two new members join a remote product team, and iteration velocity falls temporarily. The team worries that recruitment has failed. What should the agile lead do?",
["Assign new members to maintenance until historical velocity returns, then involve them in the product.","Arrange pairing and progressively challenging tasks to help newcomers learn the team's practices.","Give newcomers independent low-risk tasks first to reduce their impact on existing members.","Keep the original iteration commitment and ask experienced members to review work more often."],1,
"Onboarding requires knowledge transfer and working relationships. Pairing and clear working practices reduce adjustment costs more reliably than judging only short-term output.",
["Historical velocity is not a reliable participation threshold, and segregation may delay product knowledge and collaboration.","Independent tasks may be useful, but without joint work and knowledge transfer they do not fully support integration.","Maintaining commitments while adding review work ignores reasonable training and adjustment costs."]);
q('b011','Clarifying responsibilities','Foundation',
"On a bank compliance project, the business analyst believes the test lead confirms acceptance criteria, while the test lead believes the business owns that decision. Rework has resulted repeatedly. What should the project manager do?",
["Make the project manager the final approver and retain the other existing responsibilities.","Add a business representative to acceptance meetings and decide responsibilities in each meeting.","Jointly clarify who defines, approves, and verifies the criteria, and document the agreement.","Have the business analyst draft the criteria first, then ask the test lead to confirm them all."],2,
"The rework stems from unclear responsibilities and decision rights. Clarifying who proposes, approves, and verifies prevents handoff gaps without merely adding approval layers.",
["Centralizing final approval does not close the definition and verification gaps, nor establish that the manager has approval authority.","Deciding case by case perpetuates uncertainty; establish a stable responsibility agreement first.","This division might work, but without jointly clarifying business approval authority and other duties, misunderstandings may continue."]);
q('b012','Individual motivation','Foundation',
"One analyst on a research project wants to learn new methods; another values predictable working arrangements. How should the manager improve both analysts' engagement?",
["Give the same reward to both and let each decide how to use it.","Explain promotion criteria first to motivate both through a shared career objective.","Rotate challenging assignments so everyone receives the same development opportunities.","Understand individual motivations and offer growth opportunities and predictable work patterns accordingly."],3,
"Motivation differs between people. Connecting individual needs with project goals works better than assuming everyone responds to the same incentives.",
["Consistent rewards can support fairness but may not meet the different needs already identified; individualized discussion is still necessary.","Shared criteria help, but the two people may not currently value the same career objective.","Identical opportunities do not necessarily address individual preferences; predictable arrangements can be equally important."]);
q('b013','Escalating conflict','Advanced',
"Two supplier teams repeatedly block delivery over interface responsibilities. The project manager has facilitated fact-based discussion and attempted negotiation, but a substantial contractual disagreement remains. What is the best next step?",
["Escalate the facts and attempted solutions to someone with contractual decision authority.","Hold another coordination meeting with supplier leaders and consider escalation only after consensus.","Ask the internal technical lead to assign responsibility so interface work can proceed.","Put the disputed work on hold until the next scheduled contract review."],0,
"When collaboration cannot resolve a dispute within current authority, transparent, evidence-based escalation is necessary governance, not a failure of leadership.",
["Repeated negotiation has already failed and the issue involves authority; repeating the same path prolongs the delay.","A technical lead can analyze interfaces but cannot determine contractual obligations without authority.","A delivery-blocking issue warrants timely governance action rather than waiting passively for a routine review."]);
q('b014','Inclusive decision-making','Foundation',
"In design meetings, senior members propose solutions quickly while others stay quiet. Testers later raise important accessibility concerns privately. How should the facilitator improve the meetings?",
["Reserve the last five minutes to ask whether anyone objects.","Collect ideas independently first, then discuss in turns and actively invite informed disagreement.","Let senior members refine their proposal first, then ask others to submit written defects.","Interview quieter members separately and have the facilitator relay their views."],1,
"Independent thinking and turn-taking reduce conformity pressure and bring specialist information into decisions earlier. Effective meetings also prevent downstream rework.",
["A general request for objections after the proposal has formed may not overcome status or participation pressure.","Establishing the senior proposal first may preserve anchoring and conformity, excluding important early input.","Private interviews can supplement discussion, but permanent proxy participation does not build direct involvement for everyone."]);
q('b015','Coordinating scarce resources','Advanced',
"The only qualified engineer is scheduled for critical inspections on two projects in the same week. Neither project manager can decide departmental resource allocation. What should they do?",
["Reschedule noncritical work separately to free additional inspection time for the engineer.","Ask the engineer to estimate possible compression while both projects retain their inspection dates.","Jointly explain priorities and impacts to the resource owner and negotiate an allocation.","Have the managers reorder inspections on a first-requested, first-served basis."],2,
"An authorized resource manager should coordinate scarce shared resources against organizational priorities. Project managers provide impacts and alternatives to support that decision.",
["Moving other work may not remove overlapping demand for this qualification; authorized coordination is needed.","Compression can be evaluated, but overlapping allocations should not be retained without establishing feasibility.","First-come, first-served may conflict with organizational priorities, and neither manager holds final allocation authority."]);
q('b016','Knowledge transfer','Foundation',
"A senior operations expert on a utility project will retire in six weeks, and much of their operational knowledge is undocumented. What should the project manager prioritize?",
["Have the expert record every procedure for newcomers to watch when needed.","Complete a comprehensive operations manual first, then hold one question-and-answer session.","Ask for a frequently asked questions list and devote the remaining time to current delivery.","Identify critical knowledge and transfer it through demonstrations, pairing, and recipient validation."],3,
"Knowledge transfer is more than storing documents: recipients must be able to apply it. Prioritizing critical knowledge and demonstrations reduces continuity risk when someone leaves.",
["Recordings provide material but do not demonstrate that recipients can apply critical knowledge; practice and validation remain necessary.","A comprehensive-document-first approach may consume scarce time; prioritize critical risks and practical transfer.","Frequently asked questions may miss important tacit knowledge. Reducing handover to a list increases continuity risk."]);
q('b017','Giving constructive feedback','Foundation',
"A developer regularly uses sarcasm during code reviews, so other team members contribute less to discussion. What should the coach do first?",
["Privately discuss the specific behavior and its impact, and agree on constructive review practices.","Restate review rules in a team meeting and wait to see whether the behavior changes.","Ask others for anonymous ratings first, then show the developer the voting results.","Assign the developer primarily to coding and give review duties to other members."],0,
"Feedback should address observable behavior and its effects, remain respectful, and lead to actionable improvements. Technical contributions do not offset harm to collaboration.",
["Shared rules help, but observed behavior needs timely direct feedback rather than waiting for self-correction.","Anonymous input can add context but cannot replace respectful factual discussion; voting may polarize the team.","Changing responsibilities avoids the behavior issue and may lose valuable technical review expertise."]);
q('b018','Managing customer expectations','Advanced',
"During a demonstration, a customer executive mistakes a concept prototype for a nearly complete product and promises colleagues a launch next month. How should the project manager respond?",
["Ask sales to explain the scope while the project team leaves its plan unchanged.","Promptly clarify the gap between prototype and production delivery and align achievable expectations.","Assess acceleration options with the team before deciding whether to correct the customer's statement.","Add prototype limitations to the next weekly report to avoid damaging the relationship in the meeting."],1,
"Correct expectation gaps promptly and respectfully using actual scope and plans. An unevaluated verbal commitment should not automatically become the baseline.",
["Sales can assist, but the project manager still needs to ensure that delivery boundaries and expectations are aligned.","Correct the existing misunderstanding promptly; evaluate options afterward or in parallel.","Waiting for a report may let the incorrect commitment spread and provides no assurance of customer understanding."]);
q('b019','Team self-management','Advanced',
"A product owner wants to assign each person's daily tasks during the daily stand-up and have members report to them. How should the agile lead respond?",
["Keep individual reporting but have the agile lead assign tasks instead of the product owner.","Move task allocation to a separate meeting and use stand-ups only to report individual output counts.","Clarify that the stand-up coordinates the team's goal and provide another suitable way to ensure transparency.","Let the product owner assign priority tasks at the end while developers decide the details."],2,
"Self-management gives the team responsibility for execution while preserving transparency. The product owner can obtain information and collaborate without turning coordination into individual assignment and reporting.",
["Changing who assigns work does not restore team responsibility for execution.","Renaming or moving meetings does not address replacing goal coordination with individual assignments and output counts.","The product owner orders value priorities, but the team should organize daily execution rather than receive task assignments."]);
q('b020','Shared vision','Foundation',
"On a cross-hospital data platform project, each organization focuses only on its own reports and the team cannot agree on shared features. What should the project manager facilitate first?",
["Allocate shared-feature development capacity according to each hospital's funding contribution.","Deliver features requested by every hospital first, then discuss differing requirements.","Have the sponsor select a demonstration hospital whose requirements become the common standard.","Agree on patient-service goals and success criteria to guide requirement trade-offs."],3,
"A shared vision and success criteria create a basis for prioritization, translating local requirements into comparable overall value.",
["Funding shares may be a governance agreement but do not replace overall value and patient-service goals.","Commonly requested features are not automatically the most valuable, nor do they explain how to weigh differences.","A demonstration hospital can support piloting, but making it representative without shared criteria may miss important differences."]);
q('b021','Emotional intelligence','Foundation',
"Before a regulatory review, a colleague harshly challenges the project manager's preparation during a meeting. The manager feels angry. What is the best immediate response?",
["Regulate the emotional response, ask about specific concerns, and discuss the facts.","Restate meeting conduct rules and require the colleague to change their tone before continuing.","Pause the topic and reach agreement privately before reporting back to the team.","Ask other members to judge whether the criticism is fair before responding."],0,
"Emotional self-management helps separate delivery style from useful information and address the issue constructively. Remaining calm does not mean abandoning standards.",
["Conduct standards matter, but focusing on tone before hearing the substance may turn the discussion into a contest of authority.","A pause may sometimes help, but calmly clarifying the facts is available now; private resolution need not be assumed necessary.","Asking the team to judge a personal conflict may create factions. The manager should first regulate emotion and clarify facts."]);
q('b022','Team working agreements','Foundation',
"Team members in different countries interpret urgent-message response times differently. Some consider a lack of weekend response uncooperative. What should the coach do?",
["Measure each person's average response time first, then establish a common service standard.","Jointly agree on urgency levels, on-call arrangements, and response times across time zones.","Set separate regional rules and coordinate cross-region issues case by case.","Require replies within two hours on working days and let the manager decide weekend urgency."],1,
"Explicit working agreements reduce hidden cultural assumptions and establish sustainable mechanisms for genuine emergencies.",
["Historical response times do not necessarily represent reasonable needs; define urgency and work boundaries together first.","Regional rules can help, but cross-region work still needs shared agreements; ad hoc coordination may preserve misunderstandings.","A manager can assist, but a uniform deadline and one person's judgment may not fit team time zones or on-call capacity."]);
q('b023','Coaching and training','Advanced',
"A new project coordinator is unfamiliar with schedule-analysis software but is willing to learn, and the assignment has reasonable buffer time. What support is most appropriate?",
["Give complex analysis to a senior colleague and leave data entry to the new coordinator.","Provide the software manual and have the coordinator learn independently using a checklist.","Arrange targeted training and coaching, checking practical application in stages.","Reduce complexity with templates now and postpone concentrated training until the assignment ends."],2,
"Training, practice, and feedback can close a capability gap. Appropriate support serves both delivery and team development.",
["Division of work may manage risk, but restricting the coordinator to data entry does not develop analysis skills.","Documentation is useful, but an identified capability gap also calls for suitable coaching and feedback.","Templates help, but the available buffer permits timely learning and practice rather than postponing development."]);
q('b024','Addressing stakeholder resistance','Advanced',
"A finance director opposes a new procurement platform. Interviews reveal concern about losing approval transparency. How should the project manager improve engagement?",
["Demonstrate existing features first to prove that the platform retains approval records.","Have the sponsor explain strategic value and require finance to appoint a cooperating representative.","Provide more weekly reports so the director can continuously track platform progress.","Invite the director to define approval-visibility needs and validate the proposed solution."],3,
"Understanding the interests behind resistance and involving the stakeholder in design can turn opposition into testable requirements and joint problem-solving.",
["A demonstration may help, but first clarify specific visibility needs rather than assume the current design satisfies them.","Strategic explanation does not resolve a concrete business concern, and formal cooperation may not produce adoption.","Project progress information and visibility of approvals within the system are different concerns."]);
q('b025','Facilitating retrospectives','Foundation',
"A team identifies twelve improvements at each iteration retrospective, but none have been implemented across three consecutive retrospectives. How should the facilitator adjust the process?",
["Select a few high-value improvements with owners, completion criteria, and review dates.","Add all twelve improvements to the next iteration and work through them in priority order.","Have the manager chase every action weekly while the team continues its existing retrospectives.","Complete root-cause analysis for every issue before scheduling all improvement actions together."],0,
"Retrospectives create value through actionable improvements and a feedback loop. Limiting simultaneous improvements supports focus and follow-through.",
["Adding items to a backlog may still overload capacity; ownership and closure criteria are needed to avoid another stalled list.","Chasing work may not solve overload or unclear responsibility. The team should select improvements it can actually implement.","Deep analysis may be necessary, but all action need not wait for exhaustive analysis; focus on a few testable improvements."]);
q('b026','Recognizing team contributions','Foundation',
"A field team completes an important safety inspection early under demanding conditions. How should the project manager recognize the contribution?",
["Give everyone identical keepsakes to avoid disputes about different contributions.","Promptly describe the specific contribution and value, recognizing people in ways they appreciate.","Record the achievement in annual performance reviews to maintain a consistent reward system.","Formally praise the team lead first and leave recognition of other members to that person."],1,
"Timely, specific, fair recognition reinforces valuable behavior while respecting individual preferences and collaborative contributions.",
["A common gift can be worthwhile but does not necessarily recognize specific contributions or personal preferences.","Annual reviews can record contributions, but waiting until year-end misses an opportunity for timely reinforcement.","The lead can help, but the manager should ensure actual contributors receive fair, specific recognition."]);
q('b027','Cross-team commitments','Advanced',
"A product team promises an interface in two weeks, while the external integration team prepares for delivery a month later. They interpreted a verbal discussion differently. What should the project manager do?",
["Have each team confirm a feasible date and choose the later one.","Begin joint technical testing and confirm the formal commitment once the interface works.","Jointly verify dependencies and dates, record owners and acceptance conditions, and track commitments.","Enter the product team's commitment in the integration plan and ask the external team to adapt."],2,
"Cross-team commitments require shared agreement on dates, delivery definitions, and responsibilities. Recording and tracking them reduces interpretation gaps and exposes dependency risks.",
["The later date may not meet overall objectives and does not clarify delivery definitions or responsibilities.","Joint testing helps but cannot replace early agreement on dependencies and commitments; preparations may remain misaligned.","One team's commitment does not automatically bind another; resource and dependency feasibility need joint validation."]);
q('b028','Unsafe behavior and conflict','Advanced',
"On a construction site, a senior technician tells a newcomer to skip a required protective procedure to save time. What should the project manager do first upon discovering this?",
["Immediately call the safety officer to determine whether work needs to stop.","Have the newcomer explain the protective procedure before addressing the technician's behavior.","Report schedule pressure to the site supervisor and request a safety review.","Stop the unsafe operation immediately, then investigate and address causes through safety procedures."],3,
"For an immediate safety risk, control exposure first and then address behavioral and systemic causes. General preferences for observation or negotiation must not delay safety action.",
["The safety officer should be involved, but known immediate danger should not remain uncontrolled while awaiting arrival.","Check understanding after controlling the danger; the immediate priority is stopping unsafe work.","Reporting and review matter, but they do not replace immediate safety intervention."]);
q('b029','Continuity and succession','Advanced',
"A nonprofit project's only community liaison unexpectedly takes extended leave, with a key event three weeks away. How should the project manager maintain continuity?",
["Identify critical liaison gaps, activate backup coverage, and communicate the new contact arrangements.","Cover all liaison duties personally and appoint a replacement after the event.","Ask the liaison to send a remote handover checklist before assigning someone else.","Reduce upcoming activities to minimum service until liaison capacity recovers."],0,
"Continuity requires clear replacement responsibilities, necessary knowledge, appropriate information access, and communication of new contact arrangements to external stakeholders.",
["Temporary coverage may help, but concentrating all work on the manager without assessing capacity is not a sustainable assignment of responsibility.","Support can be requested if feasible, but someone on leave may be unavailable; continuity should not depend on their response.","Reducing scope may be an option, but doing so before assessing backup capacity could unnecessarily sacrifice value."]);
q('b030','Cultural differences in feedback','Advanced',
"Some members of an international team avoid disagreeing publicly but raise important issues after meetings. What should the coach do?",
["Have regional representatives collect views and take part in final decisions on everyone's behalf.","Provide written, private, and structured discussion channels so different communication styles inform decisions.","Make every important decision by anonymous majority vote.","Extend each public discussion until every member states a position."],1,
"Inclusive collaboration accommodates different communication styles while clarifying feedback windows and expectations for execution after a decision.",
["Representation may suit some situations, but it cannot fully replace member participation and multiple feedback channels.","Anonymous input can reduce pressure, but voting alone may lose reasoning and specialist information and is not appropriate for every decision.","More time does not automatically address cultural or power differences; compulsory public statements may increase pressure."]);
q('b031','Planning team capabilities','Foundation',
"A smart-grid project's later phase will need cybersecurity expertise that the current team lacks. That phase begins in four months. What should the project manager do?",
["Reserve an outsourcing budget and define the detailed service scope when the phase begins.","Assign security responsibility to the technical lead and redistribute that person's other work.","Analyze the capability gap and plan training, recruitment, or external support within the project plan.","Enroll current members in general security courses first and assess sufficiency afterward."],2,
"Identifying capability needs early and planning how to obtain them reduces later resource and quality risks. Compare options by cost, time, and required expertise.",
["A budget allowance does not ensure timely capability; supplier selection and service definition also require preparation.","The lead's expertise or qualifications have not been established; assigning responsibility may merely move the problem.","Training should reflect the depth of expertise and time available. General courses cannot substitute for a gap analysis."]);
q('b032','Cross-functional handover','Advanced',
"Operations refuses a new feature because it increases maintenance work. Development and operations did not jointly define operational readiness criteria. How should the manager move forward?",
["Provide complete technical documentation and retry acceptance after operations has read it.","Promise three months of development support in place of resolving current readiness gaps.","Escalate to the sponsor to determine the handover date and receiving department.","Agree on operational conditions, handover and support responsibilities, assess gaps, and plan the transition."],3,
"Sustainable handover requires shared acceptance conditions, capability, and responsibilities. Closing readiness gaps realizes value more effectively than declaring delivery complete.",
["Documentation is part of handover but does not by itself establish operational skills, responsibilities, or resources.","Temporary support may be useful, but specific gaps and long-term responsibilities must first be identified.","Escalation may eventually be needed, but first clarify acceptance conditions and readiness gaps that can be resolved collaboratively."]);
q('b033','Rebuilding trust','Advanced',
"A project manager previously understated delay risk to the customer and now confirms delivery will be two weeks late. What is the best way to rebuild trust?",
["Explain the change and impacts candidly, propose feasible options, and provide transparent updates.","Finalize a detailed recovery plan and secure every resource before informing the customer.","Agree on supplier responsibility first, then issue a joint delay announcement.","Request two weeks of buffer and replace the earlier risk discussion with a new target date."],0,
"Trust is repaired through factual transparency, ownership of communication, and credible follow-through. Concealment or blame increases the damage.",
["Prepare feasible options, but do not delay disclosure of a confirmed material change until the plan is entirely settled.","Responsibility analysis can proceed in parallel; it should not be a prerequisite for transparent communication.","A revised target needs an explanation of its basis and changes. Adding buffer alone does not repair expectations or trust."]);
q('b034','Requirements traceability','Foundation',
"A medical device project is preparing for acceptance. A critical safety requirement appears in design records but has no associated test. Which activity most directly identifies and helps prevent this omission?",
["Have the design lead confirm every requirement while testing continues under the existing plan.","Maintain traceability linking requirements to designs, deliverables, and verification evidence.","Review test cases more frequently and have quality confirm that the number of tests is sufficient.","Add safety requirements to the acceptance checklist and look for tests during acceptance."],1,
"Requirements traceability connects requirements with implementation and verification evidence, exposing uncovered requirements and work without a business basis.",
["Design coverage alone does not establish that verification covers every critical requirement.","More reviews may help, but test counts are not the same as requirement coverage; explicit links are needed.","Acceptance checks may find omissions late, increasing rework. They do not replace traceability throughout delivery."]);
q('b035','Formal change control','Foundation',
"A municipal pumping-station project has an approved design baseline. The customer requests remote monitoring, which may affect procurement and schedule. How should the project manager first handle the request?",
["Obtain a supplier implementation proposal and approve it personally if the price is acceptable.","Add it to the next phase's backlog and address it when that phase begins.","Record and assess the integrated impacts, then use the authorized change decision process.","Obtain the customer's extra funding commitment and have the team directly revise the design plan."],2,
"Controlled change does not mean resisting change. It means assessing integrated impacts and obtaining appropriate authority before committing to implementation.",
["A supplier proposal can inform the assessment, but final approval still depends on established change authority.","Record and assess requests promptly; deferring without analysis may miss procurement or design windows.","Willingness to pay does not establish authorization for schedule, quality, risk, or other impacts."]);
q('b036','New requirements during an iteration','Advanced',
"Halfway through a financial product iteration, the product owner requests a high-value but nonurgent feature. The team determines that adding it would jeopardize the iteration goal. What is most appropriate?",
["Have the product owner remove an equal number of story points and directly substitute the new feature.","Build the easiest part of the new feature now and move the rest to the next iteration.","Ask the sponsor to confirm its business value before deciding whether to cancel the iteration.","Clarify the value, update backlog ordering, and agree on subsequent arrangements with the product owner."],3,
"Agile welcomes change while transparently assessing its effect on the current goal. Nonurgent needs can usually be ordered in the backlog for subsequent planning.",
["Equal story points do not imply equal effects on goals or dependencies. Negotiate before jeopardizing the current goal.","Starting a partial feature can still disrupt the goal and may not create a valuable, complete increment.","Routine nonurgent prioritization need not start with sponsor escalation, and there is no sufficient basis to cancel the iteration."]);
q('b037','Decomposing scope','Foundation',
"A nonprofit plans a community food-delivery service. Its plan lists only initiation, execution, and closure, making delivery work difficult to estimate. What should the team do next?",
["Decompose the work into acceptable deliverables and clearly bounded, estimable work packages.","Divide the three phases into weekly activities first and have members estimate their hours.","Divide the budget by department and let each department decide its deliverables.","Use a supplier's task list directly as the complete project scope."],0,
"Deliverable-oriented decomposition helps identify all work, estimate resources, and assign responsibility. Phase names alone cannot support detailed planning.",
["Activity lists support later scheduling, but clarify delivery scope first to avoid omissions.","Departmental budgets do not replace a complete definition of deliverables and work scope.","A supplier covers only part of the responsibilities; its task list may omit project work."]);
q('b038','Calculating the critical path','Advanced',
"An installation project has two start-to-finish paths. A → C → E takes 3, 5, and 2 days respectively; B → D → E takes 4, 3, and 2 days. With no resource constraints, what is the shortest expected project duration?",
["12 days","10 days","9 days","8 days"],1,
"A → C → E totals 3 + 5 + 2 = 10 days. B → D → E totals 4 + 3 + 2 = 9 days. The project must wait for its longest path, so the duration is 10 days.",
["Twelve days combines longer activities from mutually exclusive branches into a path that does not exist.","Nine days covers the shorter path; work on the longer path would still be unfinished.","Eight days covers A and C but omits the common final activity E."]);
q('b039','Total float','Advanced',
"An inspection activity has an early start on day 6 and a late start on day 9. Assuming other conditions remain unchanged, what is its total float?",
["Day 6","It cannot be determined without the activity cost.","3 days","Day 9"],2,
"Total float can be calculated as late start minus early start: 9 − 6 = 3 days. This is the delay allowed without postponing project completion.",
["Day 6 is the early start date, not the amount of float.","Early and late start dates are sufficient to calculate total float; cost is not required.","Day 9 is the late start date; the question asks for the allowable difference in time."]);
q('b040','Three-point estimating','Advanced',
"Commissioning an experimental apparatus has an optimistic estimate of 6 days, a most likely estimate of 9 days, and a pessimistic estimate of 18 days. What is the PERT-weighted expected duration?",
["11 days","9 days","12 days","10 days"],3,
"PERT uses (optimistic + 4 × most likely + pessimistic) / 6: (6 + 36 + 18) / 6 = 10 days. Match the model to its distribution assumptions and update estimates as risks evolve.",
["Eleven days is the simple average, (6 + 9 + 18) / 3, not the specified PERT-weighted estimate.","Nine days uses only the most likely value and excludes the optimistic and pessimistic estimates.","Twelve days is the midpoint of the optimistic and pessimistic estimates, ignoring the most likely value's weight."]);
q('b041','Interpreting earned value','Advanced',
"A water-treatment upgrade has PV = CNY 1.0 million, EV = CNY 0.9 million, and AC = CNY 1.2 million. Which interpretation is correct?",
["Behind schedule and over budget; SPI is 0.90 and CPI is 0.75.","Ahead of schedule and under budget; SPI is 1.11 and CPI is 1.33.","Behind schedule and under budget; SPI is 0.90 and CPI is 1.33.","Ahead of schedule and over budget; SPI is 1.11 and CPI is 0.75."],0,
"SPI = EV / PV = 0.9 / 1.0 = 0.90. CPI = EV / AC = 0.9 / 1.2 = 0.75. Both are below 1: earned work is below plan and actual cost exceeds earned value.",
["Both ratios invert numerator and denominator, reversing the interpretation.","SPI is correct, but CPI is EV / AC, not AC / EV.","CPI is correct, but SPI is EV / PV, not PV / EV."]);
q('b042','Estimate at completion','Advanced',
"An infrastructure project has BAC = CNY 8 million, EV = CNY 2.4 million, and AC = CNY 3 million. If current cost efficiency is expected to continue, what is EAC?",
["CNY 6.4 million","CNY 10 million","CNY 8.6 million","CNY 8 million"],1,
"CPI = 2.4 / 3 = 0.8. With continuing cost efficiency, EAC = BAC / CPI = 8 / 0.8 = CNY 10 million. The forecasting formula must match the stated assumption.",
["6.4 = BAC × CPI, incorrectly treating lower efficiency as a cost reduction.","8.6 = AC + (BAC − EV), which assumes remaining work returns to budgeted efficiency rather than maintaining current efficiency.","Eight million is the original budget and does not account for continuing unfavorable efficiency."]);
q('b043','Estimating remaining costs','Advanced',
"A laboratory relocation has spent CNY 750,000. The team re-estimates the specific remaining work at CNY 450,000. Using this updated bottom-up estimate, what is EAC?",
["CNY 750,000","CNY 1,050,000","CNY 1,200,000","CNY 450,000"],2,
"The updated estimate at completion equals incurred actual cost plus the newly estimated remaining cost: EAC = AC + ETC = 750,000 + 450,000 = CNY 1,200,000.",
["750,000 is incurred AC and excludes remaining work.","There is no basis for subtracting 150,000; add AC to the latest ETC directly.","450,000 is the revised ETC, representing only the remaining work."]);
q('b044','To-complete performance index','Advanced',
"A project has BAC = CNY 5 million, EV = CNY 2 million, and AC = CNY 2.5 million. If the project still intends to finish within its original budget, what TCPI is required for the remaining work?",
["0.80","1.00","1.25","1.20"],3,
"TCPI based on BAC = (BAC − EV) / (BAC − AC) = (5 − 2) / (5 − 2.5) = 3 / 2.5 = 1.20. Remaining work must achieve cost efficiency of 1.20.",
["0.80 is current CPI, EV / AC, not the required efficiency for remaining work.","1.00 ignores the cost overrun already incurred and is insufficient to deliver the remaining value within the original budget.","1.25 is AC / EV, neither CPI nor TCPI based on the remaining budget."]);
q('b045','Expected monetary value of risk','Advanced',
"Equipment shipping has a 20% chance of delay. If the delay occurs, it will add CNY 500,000 in costs. Considering this risk alone, what is its expected monetary impact?",
["An expected loss of CNY 100,000.","The conditional loss of CNY 500,000 is also the expected loss.","An expected loss of CNY 400,000.","Reserve CNY 500,000, so the expected loss is also CNY 500,000."],0,
"Expected monetary impact is probability × consequence: 0.20 × 500,000 = CNY 100,000 loss. This probability-weighted figure is not a guaranteed actual loss.",
["500,000 is the impact if the event occurs; multiply it by the 20% probability to obtain the expected value.","400,000 uses the 80% probability of no delay rather than the probability of the loss event.","Reserve decisions can reflect risk tolerance, but a selected reserve amount is not the same as expected monetary value."]);
q('b046','Using contingency reserves','Advanced',
"An identified geological risk occurs, and contingency reserve for it is already included in the cost baseline. How should the manager handle the expense?",
["Submit a new risk request before considering the existing response and reserve.","Use the reserve under the response plan and authority limits, record impacts, and update forecasts.","Request management reserve first to avoid reducing available funds within the baseline.","Transfer contingency into the activity budget and pay it directly under normal expenditure rules."],1,
"Contingency for identified risks is generally within the baseline, but its use still requires authorization, updated forecasts, and records. Reserves do not remove control responsibilities.",
["The risk has already occurred. Treating it as a new request may delay an existing response; check and execute the appropriate arrangements.","There is an existing contingency arrangement for an identified risk. Follow its authority requirements rather than automatically switching to management reserve.","Budget transfers may themselves require approval. Normal payment processing does not replace reserve controls or risk tracking."]);
q('b047','Choosing a contract type','Advanced',
"A utility is buying standardized electricity meters. Quantities, specifications, acceptance requirements, and delivery locations are clear, and market prices are stable. Which contract generally helps the buyer control price risk?",
["Use a cost-plus-fixed-fee contract and establish total cost after procurement ends.","Use an actual-cost framework agreement and verify invoices monthly.","Use a fixed price for stable scope with clear acceptance and change provisions.","Use a time-and-materials contract with an hours cap and buyer supervision."],2,
"When scope and specifications are clear and stable, a fixed-price contract generally shifts more cost-overrun risk to the seller. Clear terms and change control still matter.",
["Cost reimbursement leaves the buyer with more actual-cost variability and is less suitable here than a fixed price.","Invoice review provides transparency but does not lock the total price for well-defined procurement.","Time-and-materials controls can help, but the buyer still bears greater effort uncertainty than needed for this standardized purchase."]);
q('b048','Contracting for exploratory research','Advanced',
"A novel sensor requires exploratory research, and its technical approach is not yet clear. The buyer cannot precisely describe the final implementation method. What should guide the contract arrangement?",
["Fix the price for all research and require bidders to absorb every technical unknown.","Use time and materials, with acceptance primarily based on researchers' recorded hours.","Choose the lowest research bid first and refine outputs through subsequent changes.","Match uncertainty with phased or cost-reimbursable arrangements and cost and outcome reviews."],3,
"Highly uncertain research requires sensible risk allocation and governance through interim results and cost transparency. Choose contract arrangements for the work characteristics rather than absolute rules.",
["A fixed price for undefined research can create a large premium and disputes instead of matching the uncertainty.","Hours spent do not replace governance around interim results, learning evidence, and termination criteria.","Selecting the lowest price without a common scope basis may turn uncertainty into later contractual disputes."]);
q('b049','Designing supplier incentives','Advanced',
"A rail-signaling supplier earns an early-delivery bonus but has recently reduced validation to save time. How should the buyer improve future incentives?",
["Tie rewards to schedule, quality, and safety acceptance instead of speed alone.","Keep the schedule bonus and increase the buyer's final sampling inspections.","Pay the bonus weekly to encourage a steady delivery rhythm.","Reward completed quantities instead and remove the early-delivery bonus."],0,
"Incentives shape behavior. Combining speed with quality and safety success criteria reduces the risk of optimizing one measure at the expense of overall outcomes.",
["More inspection can help but leaves the single incentive that encourages quality trade-offs unchanged.","Payment frequency does not resolve the conflict between speed and quality.","Quantity can also be locally optimized; quality and safety should still be reward conditions."]);
q('b050','Prioritizing risks','Foundation',
"A project has identified thirty risks, but the team has limited time and must decide which deserve deeper analysis. What is usually the next step?",
["Address risks that can be closed quickly to reduce the risk register's size.","Conduct qualitative analysis using probability, impact, urgency, and related criteria to prioritize risks.","Build quantitative models for every risk before deciding which warrant action.","Have the sponsor select their greatest concerns and put the rest on a watch list."],1,
"Qualitative analysis focuses attention on the most important and urgent risks. The team can then decide which require quantitative analysis or concentrated responses.",
["Closure counts do not measure risk reduction and may distract from serious, difficult risks.","Quantitative analysis takes resources; use qualitative screening to focus deeper analysis appropriately.","Sponsor concerns are an input, not a substitute for consistent risk assessment criteria."]);
q('b051','Secondary risks','Advanced','To reduce reliance on a single supplier, the team introduces a second supplier. An assessment finds that the two products may have incompatible interfaces during future integration; no integration failure has occurred yet. How should this uncertainty be managed?',[
'Record it as an integration issue and assign an owner after an interface failure occurs.',
'Add an interface check at procurement acceptance, without including it in the current risk assessment.',
'Assess it separately as a secondary risk created by the response and plan an appropriate response.',
'Treat it as the residual impact of the original supplier risk and update only its probability.'
],2,'A risk response can create a new secondary risk. Its impact and response still require separate assessment. Reducing one risk does not eliminate all related risks.',[
'No failure has occurred. Manage the uncertainty proactively as a risk instead of waiting to assign responsibility after it materializes.',
'Acceptance checks may be part of a response, but first assess probability, impact, and when prevention is appropriate.',
'A residual risk is the portion of an existing risk remaining after a response. New compatibility uncertainty caused by the response is a secondary risk.'
]);
q('b052','When a risk becomes an issue','Foundation','The team previously recorded a risk that data migration might fail. A migration has now failed and affected customers. What should the project manager do?',[
'Change the risk probability to 100% and continue tracking it through regular risk reviews.',
'Reassess all migration risks before deciding how to address the current failure.',
'Wait for the supplier\'s root-cause report before deciding how to address the customer impact.',
'Manage the actual event as an issue, activate the response, and update related risks.'
],3,'A risk concerns an uncertain event. Once it occurs, it becomes an issue requiring action. Manage the impact promptly while continuing to track residual and related risks.',[
'An event that has occurred and affected customers requires issue management and timely action, not just a probability update.',
'A broader reassessment can follow, but should not delay containment and recovery for the current issue.',
'Root-cause investigation matters, but appropriate mitigation can begin with the known impacts without waiting for a complete report.'
]);
q('b053','Quality root-cause analysis','Foundation','Medical-device packaging repeatedly has defective seals, and rework is delaying deliveries. The team proposes adding more final inspectors. What else should the manager promote?',[
'Analyze the root causes of seal defects, improve the process, and verify the results.',
'Increase final inspection until three consecutive batches have no detected defects.',
'Assign rework to a dedicated team while keeping the assembly process unchanged.',
'Replace inspectors first to determine whether inconsistent inspection is causing rework.'
],0,'Inspection can detect defects, but preventing recurrence requires root-cause analysis, process improvement, and verification that the improvement works.',[
'More inspection can stop defective products from reaching customers, but may not reduce their production. Process root causes still need analysis.',
'A dedicated rework team may relieve schedule pressure but does not prevent recurring defects.',
'There is no evidence implicating inspectors. Replacing them first is not evidence-based root-cause management.'
]);
q('b054','Prevention costs','Foundation','A project plans operating-procedure training for equipment assemblers to reduce future rework. Which cost-of-quality category best fits this expense?',[
'External failure cost',
'Prevention cost',
'Appraisal cost',
'Internal failure cost'
],1,'Training intended to prevent defects is a prevention cost. Cost of quality also includes appraisal costs and internal and external failure costs.',[
'External failure costs arise after defective products reach customers, such as warranty claims and returns.',
'Appraisal costs generally involve inspecting or testing existing products. Upfront training aims to prevent defects.',
'Internal failure costs arise from defects found before delivery, such as rework and scrap.'
]);
q('b055','Data and sampling','Advanced','A batch-production project uses sampling to inspect measuring instruments. To save unpacking time, the supplier suggests sampling only boxes with the best-looking packaging. How should the manager respond?',[
'Grade the boxes by appearance and inspect only intact samples within the same grade.',
'Let the supplier select the samples while the buyer applies rigorous testing.',
'Use an agreed representative sampling method to control selection bias.',
'Double the number of samples from the best-looking boxes to improve statistical reliability.'
],2,'Sampling conclusions depend on representativeness. Selecting only the best-looking boxes may systematically underestimate defects and undermine the inspection.',[
'Covering only intact boxes excludes other conditions and cannot represent the quality of the entire batch.',
'Rigorous testing cannot correct an unrepresentative selection of samples.',
'Increasing a biased sample can still produce a biased conclusion. Quantity does not repair the selection method.'
]);
q('b056','Quality checks and acceptance','Foundation','A batch of monitoring terminals has passed internal technical tests, but the customer contract requires signed on-site acceptance. Can the project manager treat the technical test results as formal acceptance?',[
'Yes. Record formal acceptance now and obtain the customer signature as an administrative follow-up.',
'Yes. Have the quality lead sign a substitute record and send it to the customer for filing.',
'No. An independent third party must repeat the tests before acceptance can be requested.',
'No. An authorized person must still complete on-site acceptance and confirm acceptance under the contract.'
],3,'Quality verification and formal acceptance are related but distinct. Internal tests provide quality evidence; acceptance must still follow the contract and the authorized acceptance process.',[
'The contract explicitly requires on-site acceptance. Formal acceptance cannot be recorded before its required conditions are met.',
'An internal signature does not automatically replace acceptance by the customer or another contractually authorized party.',
'The scenario does not require third-party retesting. The key is to complete the agreed on-site acceptance process.'
]);
q('b057','Work-in-progress limits','Foundation','A Kanban team starts many work items at once, but completion times keep increasing and work continues to pile up in the testing column. What improvement should be considered first?',[
'Limit work in progress, collaborate to remove the testing bottleneck, and prioritize finishing started work.',
'Increase developer output first so testers have more tasks to choose from.',
'Split large work items into smaller ones while maintaining the current number of items started at once.',
'Have developers follow up individually on their own testing items without adjusting capacity yet.'
],0,'Limiting work in progress and addressing bottlenecks can improve flow efficiency. Keeping each function busy does not necessarily accelerate end-to-end delivery.',[
'More upstream output adds to the downstream queue. Local efficiency does not equal overall flow efficiency.',
'Smaller items can help, but without work-in-progress limits or bottleneck management, they may simply create more queued items.',
'Individual follow-up can support progress, but the backlog may persist without team-level capacity and bottleneck management.'
]);
q('b058','Using velocity','Advanced','A team completed 24, 28, and 26 story points in its last three iterations. Its composition and iteration length will remain unchanged. How should the product owner use this information?',[
'Convert the average into hours per person and use that to assign tasks next iteration.',
'Use about 26 points as a near-term capacity reference, adjusting for differences in the work and risks.',
'Set the highest result, 28 points, as the target and use continuous improvement to close any gap.',
'Use the lowest result, 24 points, as a fixed commitment and stop adjusting capacity.'
],1,'Historical velocity can help the same team forecast, but it is neither a guarantee nor a measure for comparing productivity across teams. Forecasts must consider actual capacity and differences in the work.',[
'Story points are not a universal unit of effort in hours. Mechanically converting team velocity into individual quotas misuses the measure.',
'The best historical result is not guaranteed sustainable capacity. Commitments still depend on the actual work and its risks.',
'A conservative starting point may help, but fixing it permanently ignores new information and actual capacity.'
]);
q('b059','Interpreting a burndown chart','Advanced','An iteration\'s remaining-work line stays flat for several days and suddenly falls to zero on the last day. What should the project manager do first to interpret it?',[
'Split every large task so the burndown line is guaranteed to fall each day.',
'Treat the final zero as evidence of success and keep the current management approach.',
'Check work decomposition, updating practices, and the Definition of Done before interpreting the pattern.',
'Require daily updates and analyze the trend only after the new rule is implemented.'
],2,'An unusual chart may reflect large tasks, batch acceptance, or updating practices. Establish the facts before judging the underlying risk; the chart alone does not prove a particular behavior.',[
'Smaller tasks can improve transparency, but the goal is not to force the chart downward every day.',
'A final zero can conceal quality or status problems. That point alone does not demonstrate a healthy process.',
'Updating practices are one possible cause. Assuming the cause before investigation may overlook factors such as batch acceptance.'
]);
q('b060','Backlog refinement','Foundation','A candidate feature for the next iteration says only “improve the patient experience.” The team cannot estimate it or verify its completion. What should happen?',[
'Estimate it using similar historical features and refine detailed acceptance criteria during development.',
'Ask the product owner to assign a total point estimate and have the team start work within that capacity.',
'Create a complete interface prototype and obtain approval before splitting the backlog item.',
'Refine it into small, valuable items and clarify acceptance criteria before discussing commitment.'
],3,'Refinement should make near-term work sufficiently clear, estimable, and verifiable while preserving adaptability for longer-term requirements.',[
'Analogy can support estimation, but such a vague requirement cannot yet support a verifiable iteration commitment.',
'A business owner assigning points unilaterally cannot replace the team\'s understanding and estimation.',
'A prototype may help, but it is not a universal prerequisite for refinement. Value and acceptance still need clarification.'
]);
q('b061','Definition of Done','Advanced','The team calls a feature complete because coding has finished, but it has not passed the security testing explicitly required by the team\'s Definition of Done. How should it be reported?',[
'Report it as incomplete under the Definition of Done, complete security testing, and assess the impact on the goal.',
'Count the coding portion as completed story points and create a separate backlog item for testing.',
'Ask the product owner to accept the feature now and complete security validation before release.',
'Report it as complete this iteration and disclose the untested risk in the quality report.'
],0,'The Definition of Done provides a shared, transparent quality standard. Work that does not meet required conditions cannot be counted as complete for progress reporting.',[
'Splitting the accounting cannot bypass the original Definition of Done and may portray an incomplete increment as a deliverable.',
'Product-owner acceptance does not automatically waive the team\'s agreed mandatory quality conditions.',
'Additional disclosure helps transparency, but a completion status that conflicts with the Definition of Done is still misleading.'
]);
q('b062','Validating through increments','Advanced','A community health platform is scheduled for full launch in a year, while its business processes remain uncertain. The team wants to reduce the risk that nobody will use the final product. What is the best strategy?',[
'Open all unfinished modules first and use traffic levels to identify the most valuable features.',
'Deliver a usable increment that tests key assumptions, then adapt using real feedback.',
'Show users a complete feature list and deliver everything at once after they approve it.',
'Conduct internal usability reviews first and run a user pilot after completing all features.'
],1,'Usable increments test value assumptions earlier, reducing the risk of discovering a requirements mismatch only after substantial investment. Governance and basic planning are still necessary.',[
'Unfinished modules may not be usable, and traffic does not necessarily show that users accomplish their tasks or gain value.',
'Confirming a feature list provides limited feedback and cannot replace testing processes and value through actual use.',
'Waiting until everything is complete to obtain real user feedback increases the accumulated cost of requirements mismatches.'
]);
q('b063','Rolling wave planning','Foundation','A research project has several experimental stages over the next year. Near-term methods are clear, while later methods depend on the early results. What is the most appropriate planning approach?',[
'Approve only the current experiment\'s budget and consider the direction of later stages after it finishes.',
'Select the most likely technical approach and freeze the entire year\'s details around it.',
'Plan near-term work in detail, keep later work at a high level, and progressively refine it.',
'Break all stages into tasks with equal amounts of work now, then revise them when results arrive.'
],2,'Rolling wave planning progressively adds detail as information becomes available, balancing direction with uncertainty. Executable near-term detail can coexist with a high-level longer-term plan.',[
'Phased authorization may be appropriate, but a high-level view of direction, resources, and dependencies is still needed.',
'Technical assumptions can support planning, but freezing uncertain details limits adjustment to new evidence.',
'Applying the same level of detail to poorly understood work can create false precision and unnecessary rework.'
]);
q('b064','Hybrid delivery dependencies','Advanced','On a smart-building project, hardware installation follows fixed milestones while the software team delivers every two weeks. What is the most effective way to coordinate?',[
'Make every software iteration a hardware acceptance point to synchronize all delivery rhythms.',
'Have software finish all interfaces first, then let hardware schedule independently.',
'Use hardware milestones as the sole plan and have software report only percent complete at those points.',
'Identify shared dependencies and interfaces, establish integration checkpoints, and coordinate both rhythms.'
],3,'Hybrid delivery connects different cadences by managing dependencies through interfaces and integration points, rather than requiring all work to use one life cycle.',[
'Forced synchronization may not suit physical-delivery constraints. Effective coordination at necessary points is what matters.',
'Finishing interfaces first may leave hardware assumptions untested. Dependencies and changes still need ongoing coordination.',
'Looking only at hardware milestones loses the feedback benefits of software iterations and delays detection of integration risks.'
]);
q('b065','Tailoring the approach','Advanced','A team previously succeeded with agile methods. It now takes on a new project with strict regulatory requirements and long hardware lead times. How should the manager select the delivery approach?',[
'Assess uncertainty, compliance needs, and hardware constraints, then tailor the delivery approach.',
'Keep the agile framework and add a compliance checklist to cover the new project\'s characteristics.',
'Complete all design predictively first, then switch all implementation to agile.',
'Use the organization\'s most common method to reduce the team\'s learning costs.'
],0,'Tailoring must fit the project context. Regulatory and hardware constraints can coexist with adaptive software development; the approach must meet governance and delivery needs.',[
'An added checklist may not address hardware dependencies, approval cadence, or evidence requirements. Context still needs assessment.',
'Some hybrid structures work well, but the design and execution approaches should not be fixed before analysis.',
'Team familiarity matters, but does not replace assessment of the project\'s actual constraints and uncertainty.'
]);
q('b066','Configuration management','Foundation','Installation staff use an obsolete wiring diagram and cause rework, even though the new version has been approved. What is the most direct process improvement?',[
'Restrict diagram downloads to the site supervisor and let that person manage versions independently.',
'Control versions and release notifications so the site can access the current approved configuration.',
'Ask designers to mark every new diagram prominently and send an email reminder.',
'Have installers ask designers daily about changes and rely on verbal confirmation.'
],1,'Configuration management makes the correct version identifiable and available where it is needed and supports change traceability. An approved change must also be distributed effectively.',[
'Concentrating access does not ensure the right version is used. Clear control and distribution rules are still needed.',
'Markings and reminders help, but controlled sources, obsolete-version handling, and access at the site are also needed.',
'Manual verbal checking is easy to miss and does not provide dependable configuration traceability.'
]);
q('b067','Procurement closure','Foundation','A supplier has delivered equipment, and the project is preparing to close the procurement. What should the manager verify?',[
'Obtain the technical lead\'s confirmation and transfer unresolved contractual matters to the lessons-learned repository.',
'Use the date of the supplier\'s final invoice as the procurement closure date.',
'Confirm that contractual obligations, including acceptance, outstanding claims, payment, and archiving, have been addressed.',
'Confirm arrival of the last equipment batch, hand remaining payments to finance, and close the order.'
],2,'Procurement closure requires completion of contractual and administrative obligations and appropriate resolution of outstanding matters. Physical delivery is only one part.',[
'A lessons-learned repository supports learning; it cannot replace formal handling of claims, payments, or other contractual matters.',
'An invoice date does not prove that acceptance, disputes, and administrative obligations have been properly resolved.',
'Finance can process payments, but delivery alone does not mean acceptance and all contractual obligations are complete.'
]);
q('b068','Communication effectiveness','Foundation','The project sends detailed weekly reports, but the operations lead still does not know when to assign staff for training. How should the manager improve communication?',[
'Add training milestones to the report and let the operations lead identify the required actions.',
'Replace the weekly report with daily briefings while keeping the same content structure.',
'Copy the operations lead\'s manager and ask that person to translate the report into staffing arrangements.',
'Confirm the action-related information operations needs, adjust content and timing, and verify understanding.'
],3,'Communication succeeds when recipients understand the information and can act on it. Adapt to their specific information needs and obtain feedback rather than merely completing transmission.',[
'Adding information may help, but first verify the actual needs and understanding rather than assuming recipients will work out the actions.',
'More frequent messages may not solve a mismatch between content and action needs.',
'A senior manager may support coordination, but the project manager still must connect critical communication with the appropriate people and needs.'
]);
q('b069','Forecast input quality','Advanced','The status dashboard shows that all work is on schedule, but a site check reveals that several people have not updated task status for two weeks. What should the project manager prioritize?',[
'Verify status sources and updating responsibilities, restore trustworthy data, and then forecast.',
'Apply the worst observed result to all tasks and revise the completion date immediately.',
'Mark every task without an update as delayed and then ask members to explain.',
'Keep using last week\'s confirmed data and make all corrections at the next regular meeting.'
],0,'Unreliable inputs produce unreliable forecasts. Restore data quality and clear updating responsibilities before making evidence-based schedule judgments.',[
'A limited sample may not represent all work. Verify actual status instead of introducing another distortion.',
'A missing update does not necessarily mean a real delay. Distinguish data problems from execution variances.',
'When data is known to be unreliable, verify promptly instead of waiting for the next scheduled meeting.'
]);
q('b070','Pilot exit criteria','Advanced','A bank will pilot a new process in two branches before deciding whether to expand it. What is most important to establish before the pilot starts?',[
'Collect all available data and select the most persuasive value measures after the pilot.',
'Define assumptions, metrics, risk boundaries, and criteria for expansion or adjustment in advance.',
'Set the expansion budget first and let the sponsor decide based on personal experience afterward.',
'Use on-time pilot completion as the main criterion, then make adjustments based on complaint counts.'
],1,'A pilot gathers evidence for a decision. Defining measures and decision criteria in advance reduces selective interpretation afterward and clarifies risk controls.',[
'Choosing measures afterward encourages selective interpretation and does not reliably test the original assumptions.',
'Budgets and subjective experience do not replace explicit, testable assumptions and evidence standards.',
'On-time completion measures execution, not necessarily whether the new process works or is suitable for expansion.'
]);
q('b071','Resource leveling','Advanced','A critical engineer is assigned to two activities that cannot be performed simultaneously, and no substitute is available. After resource leveling, what should the project manager consider?',[
'Distribute work based on the engineer\'s average hours and keep the original critical path.',
'Keep the baseline unchanged and report the overallocation as a separate weekly risk.',
'Reanalyze the revised activity dates, critical path, and effect on project completion.',
'Adjust only noncritical activities so the original finish date always remains unchanged.'
],2,'Resource leveling adjusts dates to reflect resource constraints. It may extend the schedule or change the critical path, so the overall impact must be reanalyzed.',[
'Dividing time also affects dependencies and durations. Reanalysis is needed instead of retaining old critical-path assumptions.',
'Reporting alone does not produce a feasible resource schedule. The actual overallocation still needs assessment and action.',
'Resource leveling may extend the project. Not every conflict can be resolved within available float.'
]);
q('b072','Throughput forecasting','Advanced','A Kanban team recently completed 5 to 8 similarly sized items per week and has 24 items remaining. How should the manager discuss the delivery date with the customer?',[
'Use the 6.5-item weekly average to forecast about 3.7 weeks and make that a fixed commitment.',
'Use the best recent rate of 8 per week to forecast three weeks and add one buffer day.',
'Use the slowest rate of 5 per week to forecast about five weeks and keep that date until completion.',
'Use historical throughput to give an approximate range of 3–5 weeks, explain assumptions, and update regularly.'
],3,'At 5 to 8 items per week, 24 items require roughly 3 to 5 weeks. This is not a guarantee; consider item size, changes, and risks, and update the forecast as information develops.',[
'An average can support forecasting, but a fixed single-point commitment fails to express uncertainty in work and throughput.',
'Best-case performance plus an arbitrary buffer lacks a dependable basis and may underestimate variation.',
'Even a conservative date should change with item size, scope, and new evidence.'
]);
q('b073','Release readiness','Advanced','Software passes functional tests, but a disaster-recovery drill fails and the operations team has not been trained. With the planned go-live date approaching, what should the project manager do?',[
'Assess readiness gaps and risks and refer remediation and release decisions to the appropriate authority.',
'Release to a small user group now and complete disaster recovery and training before expanding.',
'Delay every feature until all improvements requested by operations have been delivered.',
'Ask the development lead to sign off the technical release and train operations afterward.'
],0,'Release readiness includes operability, recovery capability, and staff preparedness. Assess risks transparently and have the appropriate authority decide, rather than considering functionality alone.',[
'Even a limited release requires assessment and authorization of risks such as failed disaster recovery. It does not automatically bypass readiness conditions.',
'Distinguish mandatory conditions from later improvements instead of expanding release blockers indefinitely without assessment.',
'Technical approval does not replace operational readiness or authorized acceptance of business risks.'
]);
q('b074','Integrated change impacts','Advanced','A supplier proposes a cheaper substitute material. It would lower purchase costs but might increase maintenance requirements and the time needed for recertification. How should the manager assess it?',[
'Assign recertification work to the supplier and count all purchasing savings as benefits.',
'Assess life-cycle cost, quality, certification, and schedule risks together, then obtain an authorized decision.',
'Compare purchase and maintenance costs and approve the substitution if their total is lower.',
'Obtain the supplier\'s promise that delivery dates will not change and treat the substitution as purchasing optimization.'
],1,'Integration management considers impacts across objectives and the life cycle. Maintenance, certification, and delay costs may offset purchasing savings, so a whole-project assessment is needed.',[
'Assigning responsibility does not remove schedule or certification risks, and potential savings cannot yet be counted as realized benefits.',
'Financial costs matter, but quality, certification timing, and risks may alter overall feasibility.',
'A supplier promise needs supporting evidence and integrated assessment; it cannot replace a controlled change decision.'
]);
q('b075','Strategic alignment','Advanced','A fintech company shifts its strategy from user acquisition to retaining existing customers. A project measured by new registrations is halfway complete. What should the manager do?',[
'Keep the registration target and ask the team to add customer-retention features.',
'Change the success metric to retention first and continue with the existing delivery plan.',
'Review value and success measures with the sponsor and assess whether to continue, adjust, or stop.',
'Complete the currently approved scope and reflect the new strategy in the next investment cycle.'
],2,'A strategic change may alter a project\'s justification. The project manager should present impacts and options for the appropriate governance body to decide, rather than continuing mechanically or terminating without authority.',[
'Adding features directly bypasses assessment of capacity and integrated impacts and does not confirm that the original project remains justified.',
'Metrics must align with outputs and the value logic. Changing the measure alone does not replace a review of the project.',
'The original scope may no longer create priority value. A significant justification review should not wait until the next investment cycle.'
]);
q('b076','Outputs and benefits','Foundation','A hospital installs a new appointment system on time, but patients\' average waiting time does not decrease. What is the most reasonable assessment?',[
'Check whether all software acceptance tests passed and close the project as successful if they did.',
'Add appointment-processing speed as a metric and report benefits using whichever measure improved most.',
'Transfer the waiting-time target to operations and have the project record only installation and training completion.',
'Distinguish outputs from benefits and investigate adoption, processes, and the original benefit assumptions.'
],3,'Project outputs and business outcomes are distinct. Benefits depend on appropriate use, processes, and other conditions, so evaluate business measures rather than delivery completion alone.',[
'Acceptance confirms outputs but cannot by itself prove the business outcome of shorter patient waiting times.',
'Selecting the most improved measure may depart from the original objective. Investigate why waiting time did not decrease.',
'Operations often owns later benefits, but handover and benefit gaps still need explicit attention. The missed target cannot simply be ignored.'
]);
q('b077','Governance decision authority','Advanced','A utilities project proposes changing its service coverage area. The change may affect corporate investment strategy and exceeds the project manager\'s authority. What should the manager do?',[
'Prepare value and impact analysis and submit it to the authorized governance body for a decision.',
'Obtain customer agreement to the new coverage area first, then adjust project scope personally.',
'Submit the expansion to the regular change meeting for a vote based on whether costs exceed the budget.',
'Run a small expansion pilot first and use its results to seek investment committee endorsement.'
],0,'Governance connects decisions at different levels with the proper authority. The manager should provide sufficient evidence and refer strategic decisions beyond their authority to the authorized body.',[
'Customer views are important input, but an expansion affecting corporate investment strategy still needs organizational authorization.',
'A routine change body may not hold strategic investment authority, and cost is not the only impact.',
'A pilot can also consume resources and change service commitments. It cannot bypass required authorization.'
]);
q('b078','Regulatory changes','Advanced','During a bank project, new data-retention rules are issued that may make the current design noncompliant. The team worries that assessment will delay delivery. What should the manager do?',[
'Warn the customer of a possible delay and wait for the customer to choose whether to meet the rules.',
'Ask compliance experts to confirm applicability and deadlines, assess impacts, and make controlled adjustments.',
'Change the design using the strictest interpretation first and ask legal counsel to confirm applicability afterward.',
'Have the team finish the original design and defer compliance changes to the next release.'
],1,'Regulatory changes require timely confirmation of applicability and deadlines followed by a controlled response. Recording a risk is a starting point, not a substitute for compliance action.',[
'Applicable legal requirements are not merely a customer preference. Confirm legal obligations and authority first.',
'Implementing the strictest interpretation without expert confirmation can create unnecessary rework and may still misunderstand the rules.',
'Deferring compliance without checking deadlines may lead to a noncompliant release or greater rework.'
]);
q('b079','Organizational change readiness','Foundation','A new charitable-donation platform passes technical tests, but local branches keep using spreadsheets because they believe the new system adds work. What should the manager prioritize?',[
'Have branches sign adoption commitments and include usage rates in their managers\' performance evaluations.',
'Extend parallel operation of both systems and wait for staff to develop new habits.',
'Investigate adoption barriers, jointly improve processes and support, and track actual usage.',
'Train all staff first and close access to the old spreadsheets immediately after training.'
],2,'Benefits depend on changes in people and processes. Identifying resistance, providing support, and measuring adoption advances business objectives beyond technical launch alone.',[
'Performance measures can influence behavior, but do not alone remove practical barriers and may produce superficial adoption.',
'Parallel operation can support transition, but without cause analysis and support, old processes may remain indefinitely.',
'Training and cutover may be needed, but first determine whether the barriers involve processes, access rights, or workload.'
]);
q('b080','Disclosing conflicts of interest','Foundation','During an equipment procurement evaluation, the project manager discovers that a scoring panel member owns shares in a candidate supplier. What is the most appropriate response?',[
'Ask the member to disclose the percentage owned and retain all their scores if it is small.',
'Let the member score technical criteria only and assign commercial scoring to other panel members.',
'Keep the scores now and have an audit check for influence after procurement is complete.',
'Disclose and manage the conflict under policy, using recusal and independent evaluation where appropriate.'
],3,'Conflicts of interest require formal disclosure, independent review, or recusal to protect fair decisions while limiting disclosure to the appropriate audience.',[
'Organizational policy determines how to assess materiality. A small personal shareholding does not justify an automatic exemption.',
'Technical scores also influence supplier selection. Formal disclosure and appropriate controls must come first.',
'A later review cannot prevent bias in the current decision. Address the conflict before evaluation or as soon as it is discovered.'
]);
q('b081','AI data minimization','Advanced','A research team wants to upload original files containing patient names and diagnoses to a public generative AI tool to summarize project risks. How should the manager respond?',[
'Confirm authorization and tool safeguards, then use only the minimum necessary data in an approved environment.',
'Remove names and upload the remaining diagnoses and fields to preserve summary quality.',
'Obtain the tool\'s promise not to train its model on the data and let the research lead upload it.',
'Provide a read-only shared link instead of uploading the original attachments directly.'
],0,'Efficiency does not replace data governance. Sensitive data use must meet authorization and applicable requirements and follow data minimization. De-identification also requires assessment of re-identification risk.',[
'Removing names may not remove identifiability. Authorization, the processing environment, and risks in the remaining data still need review.',
'Exclusion from model training is only one safeguard. It does not replace organizational authorization and full data-processing requirements.',
'A shared link may still give the tool access to sensitive information. Read-only access does not imply authorized processing.'
]);
q('b082','Validating AI output','Foundation','The team uses AI to generate a regulatory compliance checklist. It looks professional but provides no verifiable sources. How should the project manager use it?',[
'Apply it first to low-risk work and expand it to all processes if no problems occur.',
'Treat it as a draft and have qualified people verify it against authoritative requirements before use.',
'Check it with a second AI tool and use it as formal evidence if both results agree.',
'Ask the tool to add citation links and accept the checklist if those links open.'
],1,'AI output may omit or fabricate information. High-impact decisions need reliable sources and qualified human review; the organization remains accountable.',[
'An absence of detected problems does not prove compliance accuracy. Appropriate expert review is still needed before formal use.',
'Multiple tools may share the same errors or omissions. Agreement does not replace authoritative validation.',
'A working link does not prove it supports the claim. Check the content, applicability, and completeness.'
]);
q('b083','Monitoring AI bias','Advanced','A nonprofit project uses an algorithm to screen service applications. Overall accuracy is high, but some language groups have substantially higher false-rejection rates. What is the best next step?',[
'Keep the model unchanged and give affected language groups more guidance on applying.',
'Manually review every rejection but stop checking training data for bias.',
'Analyze subgroup bias, provide human review and appeals, and correct the model or process.',
'Raise the approval threshold for everyone and observe whether the overall error rate decreases.'
],2,'Aggregate measures can hide unfair outcomes. Analyze the source of bias, protect affected people, and continuously manage the risk through oversight and correction.',[
'Guidance may improve understanding, but if the cause is model or data bias, this shifts a system problem onto applicants.',
'Human review can protect applicants, but systemic bias still needs investigation and correction rather than indefinite remediation alone.',
'Uniform threshold changes may not correct differences between groups and may worsen fairness for some groups.'
]);
q('b084','Life-cycle sustainability','Advanced','A municipal project is comparing two lighting products. A costs less to purchase but uses more electricity and has a shorter life. B costs more upfront but uses less energy and can be repaired. How should they be compared?',[
'Choose within the purchase budget and leave energy benefits for operations to assess.',
'Rank products by energy consumption alone and select the lowest without comparing maintenance.',
'Request environmental certifications and automatically award to the highest-certified supplier.',
'Compare energy, maintenance, useful life, and disposal impacts to assess whole-life value.'
],3,'Sustainability and value require a full life-cycle perspective. The lowest initial capital cost may not produce the lowest total cost or the best environmental outcome.',[
'Separating investment and operating decisions may miss the best overall value. Assess them together during procurement.',
'Energy use matters, but useful life, repair, disposal, and cost also influence life-cycle outcomes.',
'Certification provides evidence but should not automatically replace a comprehensive comparison against project needs.'
]);
q('b085','Value and safety trade-offs','Advanced','To open before the tourist season, a sponsor suggests postponing safety verification of trail guardrails. How should the project manager respond?',[
'Retain necessary safety verification, explain the impact, and propose feasible opening options.',
'Obtain written risk acceptance from the sponsor and open on the tourist-season date.',
'Open less-visited areas first and complete verification using feedback from visitors.',
'Use extra patrols and signs as substitutes for guardrail verification.'
],0,'Business value must be delivered within safety and compliance boundaries. The manager should transparently present the concern and lawful, feasible options rather than bypass required controls through inaccurate reporting.',[
'Written acceptance does not automatically waive mandatory safety or compliance conditions. The acceptable boundaries and authority must be clear.',
'Low usage does not prove unverified facilities are safe. A trial opening still has to meet necessary conditions.',
'Temporary controls may supplement protection, but cannot replace required verification without expert assessment and authorization.'
]);
q('b086','Reviewing the business case','Advanced','An energy-storage project originally relied on electricity price differences to justify its return. During implementation, market-rule changes cut expected benefits in half. What should the manager do?',[
'Accelerate commissioning first, using earlier income to offset the lower benefit forecast.',
'Update benefit and cost assumptions and present a comparison of continuing, adjusting, or stopping.',
'Cut project costs in proportion to the benefit decline before reviewing the return.',
'Keep the original business case and track the latest market scenario as a risk appendix.'
],1,'Major environmental changes call for business-case review. Better execution efficiency may not restore value lost through external conditions; governance needs to reassess the project.',[
'Accelerating commissioning may help, but its economic effect must be verified instead of assuming it offsets the market change.',
'Cost cuts may damage objectives. Assess feasible options together rather than cutting automatically in proportion to lost revenue.',
'A major benefit change belongs in the core justification analysis, not only in an appendix supporting an unchanged conclusion.'
]);
q('b087','Sunk-cost reasoning','Advanced','A legacy-platform replacement project has already consumed substantial funds. New evidence shows that the cost of continuing will exceed future available benefits. How should the manager support the decision?',[
'Continue to the next major milestone so a complete deliverable demonstrates that past spending was justified.',
'Favor the option that preserves the most existing deliverables, then evaluate its benefits.',
'Compare future incremental costs, benefits, and risks while transparently reporting past spending.',
'Calculate how much of all historical spending can be recovered before deciding whether to continue.'
],2,'Costs already incurred and unrecoverable should not dominate future choices. Compare feasible options from the present forward while maintaining transparency about the past.',[
'Reaching a milestone may not improve net benefit. Spending more to justify a past decision can increase losses.',
'Reusing existing outputs can reduce future costs, but preserving them should not take priority over overall incremental value.',
'Historical recovery provides context but does not replace comparison of future value from this point onward.'
]);
q('b088','Opportunity management','Advanced','A rural telehealth pilot finds that the existing network could also support health education. This is outside the original scope but may increase social benefits. What should the project manager do?',[
'Use spare team capacity to implement education services first and confirm scope afterward.',
'Promise the opportunity\'s benefits and obtain extra funding before assessing implementation risks.',
'Hand the opportunity to operations without assessing any further project impacts.',
'Assess the opportunity\'s value, resources, and risks and have appropriate stakeholders decide whether to include it.'
],3,'An opportunity is positive uncertainty and also needs assessment and management. Additional value still requires consideration of capacity, objectives, and authorization; scope should not expand automatically.',[
'Spare capacity does not authorize new scope. Dependencies and effects on original objectives still need assessment.',
'Potential benefits require evidence and feasibility analysis. Do not promise them before establishing their basis.',
'Transfer may be appropriate, but first assess synergies, resources, and responsibilities instead of assuming the opportunity is unrelated to the project.'
]);
q('b089','Benefit ownership','Foundation','An automation project will transition to operations next month. Expected labor-hour savings must be verified six months after launch. What should be made particularly clear before handover?',[
'Define the benefit baseline, measures, timing, and accountable owner after handover.',
'Record expected savings in the acceptance report and let finance measure them through its usual practices after closure.',
'Have the project manager return in six months and then decide who will track the benefits.',
'Use operational adoption as the sole metric, replacing labor-hour savings with usage levels.'
],0,'Many benefits materialize after project closure. Clear ongoing ownership and measurement arrangements connect delivery with long-term outcomes.',[
'Existing practices may not cover measurement definitions and accountability. Explicit, workable benefit-measurement arrangements are needed.',
'A single follow-up visit does not establish ongoing measurement ownership. Do not wait until later to assign responsibility.',
'Usage supports the assessment but is not equivalent to the originally intended labor-hour savings.'
]);
q('b090','Choosing adoption measures','Advanced','An internal knowledge-base project aims to reduce repeated inquiries. Traffic rises after launch, but inquiry volume does not fall. Which measures better assess value?',[
'Use article-update frequency and search-response speed to assess service value.',
'Track self-service resolution, changes in inquiry volume, and users\' ability to complete their tasks.',
'Combine traffic growth and time on site to assess whether the content engages users.',
'Use active registrations and articles read per person to determine whether the knowledge base meets its goal.'
],1,'Business value measures should have a causal connection to the objective. Visits and registrations may provide context, but self-service resolution and fewer inquiries show achievement more directly.',[
'Content and performance measures can explain experience but do not directly demonstrate that users resolve their own issues.',
'Attracting visits does not necessarily solve problems. Longer visits may even mean users struggle to find answers.',
'Registration and reading reflect adoption activity, not directly the intended reduction in repeated inquiries.'
]);
q('b091','Compliance evidence','Foundation','A regulator requires a traceable review record for changes to device software. The team says the code works and approval evidence is unnecessary. How should the manager respond?',[
'Have the technical lead sign an overall compliance declaration instead of keeping individual change records.',
'Assign evidence collection to audit and have developers focus only on functional validation.',
'Include authentic, traceable approval and verification evidence in process and delivery requirements.',
'Keep all code commits and confirm approvals together at the release review.'
],2,'In regulated environments, compliance evidence is itself part of delivery and governance requirements. Reconstructed records cannot replace authentic, valid evidence created when the work occurred.',[
'A general declaration usually cannot replace a required traceable review chain and specific evidence.',
'Audit may inspect controls, but the people executing daily work must still generate and retain compliance evidence.',
'A commit record is not an authorized review. Collective confirmation later may not show that required change controls actually operated.'
]);
q('b092','Reporting integrity','Advanced','A donor wants all milestones shown as green. The team suggests moving delayed milestone dates later without explaining the changes. What should the manager do?',[
'Update milestones to the latest forecast first and mention the original dates in an appendix.',
'Replace colors with forecast completion percentages to avoid misleading indicators.',
'Send the donor only key achievements and keep detailed delays in an internal log.',
'Report variances and corrective actions honestly and transparently record authorized baseline changes.'
],3,'Transparent reporting underpins trustworthy governance. Baselines can change with approval, but hidden changes must not create a false impression of always being on plan.',[
'Forecasts may change, but they must be clearly distinguished from the approved baseline. Do not quietly move the standard of comparison.',
'Presentation can improve, but replacing metrics must not conceal actual milestone variances.',
'An internal log does not replace appropriate disclosure of material variances affecting funding decisions.'
]);
q('b093','Procurement ethics','Foundation','Before bid evaluation, a supplier offers the project manager an expensive vacation package as a gesture of long-term relationship building. How should the manager respond?',[
'Decline or disclose it under the gifts policy and ensure procurement evaluation is free from improper influence.',
'Share the package with the team so no single person receives the exclusive benefit.',
'Wait until the award is announced to accept it, avoiding influence on current scoring.',
'Ask the supplier to sponsor a project event instead and retain its eligibility to bid.'
],0,'High-value gifts can create actual or perceived conflicts of interest. Handle them transparently under policy to protect procurement fairness.',[
'A benefit to the group can also create a conflict of interest and still requires policy-compliant handling.',
'Acceptance after the decision may still relate to the evaluation. Delay does not automatically remove the conflict.',
'Changing the form of the benefit does not establish compliance. Disclose it and assess its effect on procurement fairness first.'
]);
q('b094','Credible environmental measures','Advanced','A project claims that moving to cloud services reduced carbon emissions, but its calculation includes only local server electricity and excludes cloud energy and equipment life cycles. How should the manager improve it?',[
'Replace project-specific measurement with the cloud provider\'s published average emissions-reduction percentage.',
'Define the accounting boundary and baseline and use credible data to check transferred impacts.',
'Keep the local-reduction claim and declare cloud impacts outside the project scope.',
'Compare electricity for the same service volume and use one common conversion factor to estimate total emissions.'
],1,'Environmental assessment requires consistent boundaries and verifiable data. Shifting energy use outside the organization does not automatically reduce total emissions.',[
'Provider averages may not match this project\'s workload, region, or baseline. Their applicability must be verified.',
'Explaining scope helps, but a local reduction cannot be presented as an overall reduction. Consistent comparison boundaries are still needed.',
'Normalizing service volume is useful, but differences in electricity sources and equipment life cycles may still change the overall conclusion.'
]);
q('b095','Balancing multiple objectives','Advanced','A primary-care project can choose a feature-rich system that is difficult to maintain or a moderately featured system that local staff can maintain independently. How should the decision be made?',[
'Rank options by first-year total cost and prefer the richer feature set if the budget allows.',
'Let local operations decide because their preference fully represents long-term system value.',
'Assess value with stakeholders, considering service outcomes, operational capability, costs, and risks.',
'Choose the feature-rich system first and add maintenance training to later plans.'
],2,'Value includes sustainable operation and real usage outcomes, not just features or short-term cost. Relevant stakeholders should use evidence to balance the objectives.',[
'First-year costs can still omit long-term operating capability and whole-life benefits.',
'Operations input is essential, but patient, business, cost, and other stakeholder perspectives must also be considered.',
'Training may close the gap, but its feasibility and long-term resource needs must be verified before choosing on that assumption.'
]);
q('b096','Business continuity','Advanced','A city payment system is preparing for migration. A failed cutover would affect residents\' essential services. What should the manager ensure before the release decision?',[
'Schedule cutover for the lowest-traffic period and validate recovery afterward.',
'Keep supplier experts on site to devise a repair plan if failure occurs.',
'Take a complete data backup and consider that sufficient release assurance.',
'Validate rollback and continuity plans and clarify triggers and execution responsibilities.'
],3,'A critical-service cutover must allow service to continue or recover after failure. Clear, tested continuity arrangements are more reliable than simply keeping people on standby.',[
'Off-peak timing reduces some impacts but does not replace previously validated recovery capability.',
'Expert support helps, but improvising a plan during failure may not protect critical-service continuity.',
'Backups are one component. The recovery process, timing, authority, and practical execution must also be confirmed.'
]);
q('b097','Monitoring the external environment','Advanced','A cross-border payments project depends on one major market whose policies and competitive landscape are changing rapidly. How should the manager manage this over time?',[
'Continuously monitor external changes, validate assumptions, and bring significant impacts into governance.',
'Compile industry news quarterly and adjust project plans only at the annual review.',
'Forward all policy and competition changes to strategy and continue the original project plan.',
'Track only policies that directly affect the current contract and consider other factors after authorization.'
],0,'The external environment affects value, risk, and feasibility. Continuous monitoring and assumption validation help a project adapt promptly rather than only improve internal execution.',[
'Fixed long review cycles may respond too slowly to rapid change. Significant impacts should trigger timely reviews.',
'Strategy may own some analysis, but the project must still identify actual effects on objectives, risks, and plans.',
'Competition and policy changes can alter value and feasibility even without directly changing the contract.'
]);
q('b098','Ethics and social impact','Advanced','A charity project plans to publish beneficiaries\' names, photographs, and health conditions to showcase success stories. Consent covers only internal service use. How should the manager respond?',[
'Restrict access to donors and rely on the consent for internal service use.',
'Pause publication, verify authorization for the new purpose, and minimize identifiable information.',
'Obtain the service organization\'s director\'s permission to approve on behalf of all beneficiaries.',
'Remove names and publish photographs and diagnoses as anonymous evidence of results.'
],1,'A charitable purpose does not replace privacy and consent requirements. Public use must be appropriately authorized, with identifiable information and potential harm minimized.',[
'A smaller audience still represents a different purpose and audience. It cannot be assumed to fall within the original consent.',
'A director may not have authority to consent to publication of individuals\' sensitive information. Confirm appropriate authorization.',
'Photographs and diagnoses may still identify individuals. Removing names does not automatically protect privacy.'
]);
q('b099','Accountability for AI decisions','Advanced','A project proposes letting AI automatically approve high-value procurement changes because it is faster. Current governance requires an authorized committee to approve them. How should the manager proceed?',[
'Allow automatic approval for high-confidence results and send only low-confidence cases to the committee.',
'Have the committee preapprove a generic prompt and automatically execute all subsequent outputs.',
'Define the boundary between analytical assistance and human approval; formally assess any authority changes through governance.',
'Let AI approve changes for a month and have the committee review all decisions at month-end.'
],2,'A tool can assist analysis but does not automatically receive organizational authority. High-impact decisions still require clear accountability, appropriate review, and formal changes to authorization.',[
'Confidence is neither correctness nor organizational authority. It cannot justify bypassing approval rules.',
'Approving a prompt is not approval of every high-value change and does not remove governance or accountability requirements.',
'Retrospective checking does not automatically replace prior approval required by current rules.'
]);
q('b100','Organizational learning and reuse','Foundation','After an infrastructure project, the team finds that optimizing the approval sequence significantly reduced waiting time. What best supports long-term organizational benefit?',[
'Add only the improved approval template to the knowledge base for future projects to use directly.',
'Explain the lesson at closure and rely on attending managers to remember and apply it.',
'Make the observed reduction in waiting time a standard performance target for every future project.',
'Record the context, evidence, and applicability, submit it for organizational assessment, and support reuse.'
],3,'Reusable lessons include context, causes, results, and limits of applicability. This helps the organization decide how to adapt them to new situations instead of copying mechanically.',[
'A template is useful, but without context and applicability boundaries it can be misused mechanically.',
'Verbal sharing has limited reach and is hard to retrieve. Accessible organizational records and clear follow-through are needed.',
'Different contexts have different bottlenecks. One target cannot replace understanding of the improvement mechanism and its applicability.'
]);
Object.assign(window.PMP_EN.questions,questions);
const lessons={
l13:{title:'Risks and issues: respond to uncertainty early',summary:'Plan responses to threats and opportunities, and distinguish uncertain risks from issues that have occurred.',sections:[
{title:'Risk is not always negative',body:'A risk is an uncertain event or condition that may affect objectives, positively as an opportunity or negatively as a threat. A situation that has already occurred and needs resolution is an issue. Describe the cause, event, and impact clearly. For example, insufficient supplier capacity may delay delivery and disrupt the testing window. Avoid vague labels such as “supplier risk.”'},
{title:'Analysis and prioritization',body:'Start with qualitative prioritization using probability, impact, urgency, and other factors. Significant risks may merit quantitative analysis. Expected monetary value is generally probability multiplied by the monetary impact, but an average does not predict the actual outcome with certainty. Also consider correlations, organizational risk capacity, and low-probability events with severe losses.'},
{title:'Choose responses and assign ownership',body:'Threat responses include avoidance, mitigation, transfer, acceptance, and escalation when outside project scope. Opportunity responses include exploitation, enhancement, sharing, acceptance, and escalation. Transfer typically uses contracts or insurance to allocate financial impacts; it does not make a risk disappear. Each priority risk needs an owner, triggers, response actions, and necessary resources.'},
{title:'Monitor continuously and manage issues',body:'Regularly review risk exposure, response effectiveness, and new risks, including secondary and residual risks. When a risk occurs, execute the agreed contingency response and update the issue log and plans as needed. Assess and address unforeseen issues promptly too; absence from the risk register is no reason to ignore them.'}
],takeaways:['A risk is uncertain; an issue has already occurred.','Responses need owners, triggers, and resources.','Transferring a risk does not remove all responsibility or impact.'],scenario:{prompt:'A recorded risk of delay by a critical supplier is triggered. An approved alternative-procurement plan already exists. What comes next?',answer:'Execute the contingency plan according to its triggers, notify relevant people, and track results and remaining impacts. Do not restart discussion of an already authorized response from scratch or conceal the impact.'}},
l14:{title:'Integration and change control',summary:'Understand how a change affects the whole project and keep authorization, planning, and execution aligned.',sections:[
{title:'The project manager integrates the work',body:'Scope, schedule, cost, quality, risk, resources, and benefits are interconnected. A seemingly small technical change may affect training, contracts, and compliance evidence. Integration management does not mean doing every specialist’s analysis. It means coordinating people to reach a whole-project judgment so local improvements do not damage overall objectives.'},
{title:'Predictive change control',body:'Record a change request, assess its impacts and alternatives, and submit it to the role or change-control body with the appropriate authority. Then update affected baselines and documents and communicate implementation. Authority varies by organization; never assume the project manager or an individual customer always holds every approval right.'},
{title:'Agile still has controls',body:'Agile allows backlog ordering to adapt to feedback, within product goals, budgets, regulations, and contractual boundaries. When new requirements arise during an iteration, the product owner and developers negotiate scope while protecting the iteration goal. Agile does not mean anyone can insert work at any time without considering capacity.'},
{title:'Configuration, status, and honest reporting',body:'Configuration management identifies controlled items, versions, and change status so actual deliverables match the records. Distribute current information after approval so teams do not use obsolete requirements. Status reports should show real variances, trends, and decisions needed. Never quietly change the baseline to make progress look normal.'}
],takeaways:['Assess integrated impacts and obtain approval from the right authority.','Approved changes must reach both the plans and the execution.','Agile adaptability operates within clear boundaries.'],scenario:{prompt:'A sponsor verbally requests a new feature spanning several departments. Should the team start development immediately?',answer:'Record the need and assess the overall impact first. Confirm authority and the applicable change process, obtain the necessary decision, and update plans. Seniority does not mean a verbal request automatically replaces required procedures.'}},
l15:{title:'Procurement and contracts: manage commitments and risk',summary:'Understand how contract types allocate risk and use evidence to manage supplier performance.',sections:[
{title:'Define the need before buying',body:'A make-or-buy decision should consider capability, cost, risk, intellectual property, and long-term maintenance. Keep procurement statements of work and evaluation criteria clear rather than selecting solely on the lowest bid. If suppliers cannot understand acceptance conditions, a quickly signed contract can still lead to delivery disputes.'},
{title:'Contract types and uncertainty',body:'Fixed-price contracts usually place more cost-overrun risk on the seller, although unclear scope can increase prices and disputes. Cost-reimbursable contracts place more cost risk on the buyer and may suit work that is hard to define precisely, but require stronger cost control. Time-and-materials contracts charge for time and materials and usually need ceilings and clear management controls.'},
{title:'Manage performance with facts',body:'Track delivery, quality, payment conditions, and risks. When variances occur, review the contract and factual evidence first, then collaborate with the supplier on correction. Procurement involves defined authority: a project manager should not independently promise extra fees or change terms without authorization. Involve procurement and legal roles through organizational procedures when needed.'},
{title:'Disputes, changes, and closure',body:'Use the contract’s communication and dispute-resolution mechanisms, preserve records, and avoid emotional threats or unauthorized penalties. Procurement closure should confirm acceptance, outstanding claims, final payment, and archiving. Contract completion does not necessarily end warranty, confidentiality, or support obligations immediately.'}
],takeaways:['Contract risk allocation depends on the terms and clarity of scope.','Supplier changes must respect procurement authority.','Closure confirms both delivery and continuing obligations.'],scenario:{prompt:'A supplier says a customer’s new requirement falls outside a fixed-price contract. How should the project manager begin?',answer:'Review contract scope, acceptance criteria, and change records. Assess the difference, consult procurement and relevant parties, and use the contractual change mechanism. A fixed price does not entitle the buyer to unlimited additional work at no charge.'}},
l16:{title:'Scrum: deliver usable increments in short cycles',summary:'Connect accountabilities, events, goals, and quality commitments rather than treating agile as a meeting checklist.',sections:[
{title:'Three areas of accountability',body:'The Product Owner focuses on maximizing product value and effectively managing the Product Backlog. The Scrum Master helps the team and organization understand and use Scrum effectively. Developers are accountable for creating increments that meet the Definition of Done. The team decides how to implement the work; the Scrum Master is not simply a supervisor who assigns daily tasks.'},
{title:'Goals connect levels of planning',body:'The Product Goal provides a longer-term direction, while the Sprint Goal gives the current cycle a shared focus. Planning discusses why the work is valuable, what can be accomplished, and how to proceed. Scope can be clarified and negotiated while preserving the goal, but arbitrary additions should not endanger that goal or reduce quality.'},
{title:'Every event has a purpose',body:'The Daily Scrum helps Developers inspect progress toward the goal and adapt their near-term plan; it is not a mandatory status report to a manager. The Sprint Review examines results and environmental changes with stakeholders and considers future direction. The Retrospective focuses on collaboration, processes, and tools and selects actionable improvements. Turning all events into status reporting loses their feedback value.'},
{title:'An increment must truly be usable',body:'The Definition of Done describes the required quality state. Work that does not meet it cannot count as a completed increment; remaining work must be handled transparently. The Review should not be the first quality checkpoint, nor must every release wait until after it. Release arrangements should reflect business and organizational constraints.'}
],takeaways:['The Product Owner orders work for value; the team determines implementation.','The Review examines the product and direction; the Retrospective examines ways of working.','Work is not truly done until it meets the Definition of Done.'],scenario:{prompt:'The daily meeting has become a manager questioning each person about hours worked, and the team finds it unhelpful. How should it improve?',answer:'Restore a Developer-led discussion of the Sprint Goal, current impediments, and adjustments to upcoming collaboration. Address other management needs through suitable channels rather than turning the event into an attendance check.'}},
l17:{title:'Kanban, flow, and agile measures',summary:'Reduce work in progress and waiting so the team can finish valuable work consistently.',sections:[
{title:'Visualize the whole workflow',body:'A Kanban board shows work from request to completion and makes entry and exit policies explicit. Do not show only development while hiding queues for testing, approvals, or release. Visible blockers and queues help the team discuss system problems instead of merely asking whether individuals are busy enough.'},
{title:'Limit work in progress',body:'Work-in-progress limits reduce task switching and encourage finishing existing work before pulling new items. If testing reaches its limit, help remove the bottleneck or adjust capacity rather than adding unlimited features under development. Explain temporary exceptions transparently; exceptions should not permanently replace the rules.'},
{title:'Interpret measures correctly',body:'Throughput counts items completed per unit of time. Cycle time measures an item from the start of work to completion; delivery lead time usually measures request to delivery. Keep definitions consistent. A widening band for one state on a cumulative flow diagram may indicate a queue, which must be checked against the actual work.'},
{title:'Use measures to learn, not punish',body:'A burndown chart shows the trend in remaining work. A burnup chart shows completed work and scope changes together, helping reveal added requirements. No single metric independently proves value or quality. Explain samples and uncertainty when forecasting from historical data. Do not invent work splits or mark items complete early just to improve a chart.'}
],takeaways:['Stop starting more work and help existing work finish.','Metric definitions and boundaries must remain consistent.','Consider value, quality, and flow together.'],scenario:{prompt:'Developers keep finishing new features, but the testing queue grows. What should the team prioritize?',answer:'Identify and collaboratively remove the testing bottleneck, limit upstream pulling as appropriate, and improve testing capability or automation. Increasing development output further expands the queue and may not improve delivery.'}},
l18:{title:'Hybrid delivery and cross-team dependencies',summary:'Make different approaches and cadences serve one shared outcome.',sections:[
{title:'Design around delivery characteristics',body:'One project may combine stable engineering construction, exploratory software development, and strict compliance verification. A hybrid approach should explain why each component uses its chosen method and establish a consistent view of the overall outcome. Do not force every activity into equal-length iterations simply because agile is popular in the organization.'},
{title:'Agree on interfaces and dependencies',body:'Clarify the content, quality, owner, and required date of dependent deliverables such as interface specifications, test environments, or regulatory evidence. Validate high-risk interfaces early. Visible dependency boards and joint planning help resolve cross-team impediments. Individual teams finishing on time does not guarantee that the system will integrate.'},
{title:'Align governance without standardizing every practice',body:'Teams can retain different daily practices while sharing rules for value objectives, risk reporting, budgets, and key decisions. Phase gates should examine evidence and acceptable risk rather than mechanically demanding impossible precision before exploratory work begins.'},
{title:'Keep tailoring through feedback',body:'Regularly investigate where delivery delays arise: approval queues, technical interfaces, unclear acceptance, or resource competition. Adjust cadence, rules, and capability to address root causes rather than repeatedly changing the name of the method. As scope and technical uncertainty decrease, management practices can change too, with clear reasons communicated to stakeholders.'}
],takeaways:['Local completion does not guarantee a usable whole.','Interfaces, dependencies, and governance are central to hybrid delivery.','Adapt methods in response to actual evidence.'],scenario:{prompt:'The software team delivers every two weeks, but the hardware integration environment will not be ready for three months. Where is the risk?',answer:'Fast software completion may conceal system-integration risk. Coordinate early prototypes or simulation, clarify interfaces, and plan joint verification to obtain evidence of overall usability as early as possible.'}},
l19:{title:'The business case, value, and benefits realization',summary:'Use business objectives to assess whether a project remains worthwhile and assign ownership of benefits after delivery.',sections:[
{title:'The business case explains why',body:'A business case typically describes an opportunity or problem, alternatives, expected benefits, costs, and major risks. The project charter authorizes the project and states high-level objectives; the two serve different purposes. Project managers should understand business assumptions rather than assuming the investment remains justified forever because the project has started.'},
{title:'Benefits need measures and owners',body:'Translate “improve service” into observable measures such as processing time, adoption rate, and complaint rate. Define baselines, targets, measurement dates, and owners. Operations or business owners often continue tracking benefits after delivery. Handover should transfer capability and accountability as well as equipment and documents.'},
{title:'Prioritize overall value',body:'Evaluate strategic alignment, user value, risk, cost, time, and sustainability together. The highest short-term benefit is not always the best choice; compliance and long-term maintenance can alter the conclusion. Sunk costs have already been incurred and should not alone justify continuing a project that has lost its value.'},
{title:'Keep testing business assumptions',body:'Market, technology, or strategy changes can make original benefits unattainable. Report the impact transparently and present options to adjust, reduce, redirect, or terminate for the appropriate governance level to decide. A project manager must neither terminate a strategic project without authority nor conceal evidence of declining value to preserve the original plan.'}
],takeaways:['The business case remains relevant after initiation.','Benefits need baselines, measures, timing, and owners.','Money already spent does not replace judgment about future value.'],scenario:{prompt:'Most of the budget has been spent, but a new regulation makes the core product unsellable. Should the project finish to avoid waste?',answer:'Reassess the business case, compliance impacts, and feasible alternatives, then submit them to the authorized governance body. Whether further investment makes sense depends on future value and risk, not simply on how much has already been spent.'}},
l20:{title:'Governance, compliance, and professional ethics',summary:'Make decisions within authority and policy while protecting honest reporting and the public interest.',sections:[
{title:'Governance structures decisions',body:'Governance defines accountability, approval authority, oversight, escalation conditions, and alignment with organizational strategy. Understand the responsibilities of the sponsor, committees, PMO, and functional roles. Governance is not just finding a leader during a crisis; it creates predictable paths for routine decisions and exceptions.'},
{title:'Build compliance into the plan',body:'Identify applicable legal, regulatory, industry, and organizational requirements. Involve compliance specialists and include necessary work in scope, schedule, and budget. Assess and respond when requirements change. Deadline pressure or customer consent does not replace legal obligations. Seek appropriate expert interpretation when a specialist issue is unclear.'},
{title:'Integrity and conflicts of interest',body:'Report progress and issues honestly, protect confidential and personal information, and avoid plagiarism or fabricated records. Disclose conflicts involving yourself or supplier selection under policy, and withdraw from inappropriate decision-making roles. Disclosure does not automatically remove every risk; required management measures must also be applied.'},
{title:'Address misconduct and safety concerns',body:'Verify facts where reasonably possible, preserve evidence, and use appropriate reporting channels. For urgent safety risks, protect people promptly and follow procedures rather than waiting for a routine meeting. Avoid public accusations based on unsubstantiated rumors, but do not conceal established major misconduct to protect relationships or schedules.'}
],takeaways:['Governance defines authority, accountability, and escalation conditions.','Verbal promises do not waive compliance or safety.','Honest reporting and confidentiality must both be respected.'],scenario:{prompt:'A supplier offers a private vacation in exchange for favorable bid evaluation. What should you do?',answer:'Reject the improper benefit, disclose and report the situation under organizational policy, and preserve fair evaluation and evidence. Potential project savings do not justify acceptance.'}},
l21:{title:'Organizational change and transition',summary:'Help users change how they work and ensure deliverables can operate sustainably.',sections:[
{title:'Launch is not the end of change',body:'A new system or process produces expected benefits only when people adopt it and integrate it into daily work. Analyze which groups will experience changes to roles, skills, incentives, and working practices, and understand their concerns and readiness. A launch announcement and training document alone rarely create lasting behavioral change.'},
{title:'Engagement, pilots, and capability',body:'Involve key users in design and pilots, and explain the purpose and impacts of the change. Provide role-specific training, practice, and support channels, then refine the approach using feedback. Trusted change champions can share experience, but a few enthusiastic voices should not substitute for all affected groups.'},
{title:'Handover requires operational readiness',body:'Confirm operational ownership, service support, access rights, documentation, monitoring, contingency, and rollback arrangements. Have the receiving team demonstrate that it can operate the solution and handle common issues, then complete explicit acceptance. Temporary on-site project support may ease transition, but needs exit criteria to avoid permanent dependence on the original team.'},
{title:'Connect closure with benefit tracking',body:'Closure includes confirming contractual and delivery status, archiving records, releasing resources, and capturing lessons. Assign clear owners and timing for continuing benefit measurement or warranty obligations. Early termination also needs orderly closure rather than simply stopping communication and recordkeeping.'}
],takeaways:['Adoption and changed capability affect final benefits.','Handover should verify operating capability and support arrangements.','Benefits may still need tracking after project closure.'],scenario:{prompt:'The new platform passes testing, but frontline staff cannot handle exceptional transactions. Is it ready for full rollout?',answer:'Assess operational readiness and add targeted training, a pilot, and exception-support procedures. Decide on rollout against explicit criteria. Passing technical tests does not demonstrate organizational readiness.'}},
l22:{title:'Sustainability, systems thinking, and complexity',summary:'Include environmental, social, and long-term operational impacts in project decisions.',sections:[
{title:'Consider the whole life cycle',body:'Project impacts extend beyond construction or development. Material sourcing, energy use, maintenance, accessibility, and eventual disposal can all affect long-term value. Do not compare options on initial purchase price alone. Consider whole-life costs and impacts in light of organizational objectives and suitable expert advice.'},
{title:'Make sustainability measurable',body:'Turn objectives into verifiable measures and constraints, such as energy use, waste, supply-chain requirements, or service accessibility. Identify data sources, measurement boundaries, and owners rather than merely applying a green label. When objectives conflict, show the trade-offs transparently and involve authorized stakeholders in the decision.'},
{title:'Systems thinking examines connections',body:'A project sits within organizational, market, and social systems. An improvement in one area may burden another. For example, drastically reducing inventory to lower warehousing costs may increase transport frequency and supply-disruption risk. Examine feedback loops, dependencies, and delayed effects so local optimization does not damage overall outcomes.'},
{title:'Complex problems require learning',body:'When cause and effect are hard to determine in advance, use small, controlled experiments to gather feedback within risk boundaries and transparent monitoring. More detailed planning alone cannot eliminate complexity, and complexity does not justify abandoning governance. Adjusting to new evidence is more dependable than insisting on unverified assumptions.'}
],takeaways:['Evaluate the use and disposal phases as well as delivery.','Sustainability commitments need explicit measures and evidence.','Controlled experiments support learning in complex situations.'],scenario:{prompt:'A low-priced device fits the delivery budget but consumes substantially more energy later. How should it be assessed?',answer:'Evaluate purchase, operation, maintenance, and disposal costs alongside sustainability objectives across the life cycle. Present the trade-offs transparently and obtain an authorized decision instead of ranking solely by purchase price.'}},
l23:{title:'AI and data: support judgment, retain accountability',summary:'Use AI for verifiable assistance while managing privacy, bias, and incorrect output.',sections:[
{title:'Start with a specific use case',body:'AI can help organize meeting notes, classify risks, analyze trends, or draft communications. Before use, define the objective, acceptable error level, and human review method. Do not automatically execute a high-risk decision just because a model gives a fluent answer. The project manager retains appropriate responsibility for how the tool is used and how decisions are made.'},
{title:'Data quality underpins analysis',body:'Check data sources, completeness, accuracy, timeliness, and representativeness. Historical project data may not apply to the current team or environment, and missing data may introduce bias. Interpret metric changes in their business context. Statistical correlation is not automatically causation or a certain forecast.'},
{title:'Protect privacy and confidentiality',body:'Follow organizational rules for tools, data classification, authorization, and retention. Do not casually upload personal information, customer secrets, or restricted materials to external systems. Apply data minimization, de-identification, and access controls where appropriate, and involve security, privacy, or compliance specialists before use rather than completing paperwork after a disclosure.'},
{title:'Validate output and keep monitoring',body:'Check facts, calculations, citations, and potential bias, and retain necessary usage records and human approvals. Assess effectiveness through a low-risk pilot before expanding. After deployment, continue monitoring performance, errors, and environmental changes, with suspension or rollback conditions. Initial test success does not establish permanent reliability.'}
],takeaways:['AI output needs verification; it does not provide automatic authority.','Protect data before evaluating a tool’s value.','High-impact decisions need appropriate human judgment and traceability.'],scenario:{prompt:'The team wants to upload complaint data containing customers’ identity documents to a public AI tool for summarization. What should happen first?',answer:'Check data classification, authorization, and organizational tool policy. Assess minimization or de-identification options and obtain required review. Saving analysis time does not justify immediate upload.'}},
l24:{title:'Scenario questions and exam readiness',summary:'Use a consistent problem-solving process and real learning evidence to decide when to sit the exam.',sections:[
{title:'Read scenario questions in four steps',body:'First read the question to identify whether it asks for the first action, next step, or best solution. Then identify the role and life cycle, extract facts and constraints, and compare the timing and impact of each option. Avoid importing your own company’s habits. If several options seem reasonable, determine which comes first and which needs more information or authority.'},
{title:'Watch for superficially decisive answers',body:'Replacing people without analysis, implementing unapproved changes, hiding variances, or immediately escalating every problem often fails to address the root cause. Yet do not automatically reject escalation or urgent action: safety, misconduct, and matters beyond your authority may require prompt handling. Let the conditions in the question determine the judgment.'},
{title:'Turn mistakes into retrieval practice',body:'Before reading the explanation, explain your reasoning in your own words. Identify whether the error involved a concept, context, sequence, calculation, or reading oversight. Retry after a few days and create a new example. High scores on repeated questions may reflect memorized answers. Use unseen, credible practice questions to test transfer before the exam.'},
{title:'A realistic readiness threshold',body:'Cover the core knowledge, explain common trade-offs, and demonstrate stable performance on unfamiliar timed questions before choosing a date alongside formal training and exam arrangements. Suggested scores on this site are self-management targets, not a PMI-published passing mark. Before the exam, verify eligibility, identification, location or equipment requirements, and allow time for rest and unexpected events.'}
],takeaways:['The same action may have different priority at a different time.','Performance on unfamiliar questions says more than memorized answers.','Site practice scores do not equal an official probability of passing.'],scenario:{prompt:'After taking the same practice set three times, you score 95%. Is that enough to conclude that passing is assured?',answer:'No. Examine unfamiliar questions, timed full-length practice, domain performance, and your ability to explain answers, then address weaknesses. Familiar-question scores can confirm reinforcement but cannot independently predict the official exam.'}}
};
// Preserve the original bilingual glossary pairs independently of script load order.
const terms={"l13":[{"en":"Risk Owner","zh":"风险责任人"},{"en":"Contingency","zh":"应急措施"},{"en":"Residual Risk","zh":"残余风险"}],"l14":[{"en":"Change Control","zh":"变更控制"},{"en":"Baseline","zh":"基准"},{"en":"Configuration","zh":"配置"}],"l15":[{"en":"Fixed Price","zh":"固定总价"},{"en":"Cost Reimbursable","zh":"成本补偿"},{"en":"Time and Materials","zh":"工料合同"}],"l16":[{"en":"Product Owner","zh":"产品负责人"},{"en":"Sprint Goal","zh":"Sprint目标"},{"en":"Increment","zh":"增量"}],"l17":[{"en":"WIP","zh":"在制品"},{"en":"Cycle Time","zh":"周期时间"},{"en":"Throughput","zh":"吞吐量"}],"l18":[{"en":"Hybrid","zh":"混合型"},{"en":"Dependency","zh":"依赖"},{"en":"Integration","zh":"整合"}],"l19":[{"en":"Business Case","zh":"商业论证"},{"en":"Benefits Realization","zh":"收益实现"},{"en":"Sunk Cost","zh":"沉没成本"}],"l20":[{"en":"Governance","zh":"治理"},{"en":"Compliance","zh":"合规"},{"en":"Conflict of Interest","zh":"利益冲突"}],"l21":[{"en":"Change Adoption","zh":"变革采用"},{"en":"Transition","zh":"过渡移交"},{"en":"Operational Readiness","zh":"运行准备"}],"l22":[{"en":"Sustainability","zh":"可持续性"},{"en":"Systems Thinking","zh":"系统思维"},{"en":"Life-cycle Cost","zh":"全生命周期成本"}],"l23":[{"en":"Human Oversight","zh":"人工监督"},{"en":"Data Minimization","zh":"数据最小化"},{"en":"Bias","zh":"偏差"}],"l24":[{"en":"Retrieval Practice","zh":"检索练习"},{"en":"Readiness","zh":"准备程度"},{"en":"Time Management","zh":"时间管理"}]};
for(const id of Object.keys(lessons))lessons[id].terms=terms[id];
Object.assign(window.PMP_EN.lessons,lessons);
Object.assign(window.PMP_EN.weeks,{
7:{title:'Apply agile and hybrid approaches',focus:'Scrum accountabilities, flow measures, and cross-team interfaces.',tasks:[
'Spend 2 hours studying the three lessons and diagramming the difference between the Review and Retrospective.',
'Complete 4 hours of formal training; if already completed, study additional agile and hybrid cases.',
'Spend 2 hours on 40 agile and hybrid questions, focusing on goals, quality, and boundaries of authority.',
'Spend 1 hour explaining WIP, throughput, and cycle time; allow up to 1 additional hour for review.'
],checkpoint:'Distinguish when to reorder the backlog, remove an impediment, or follow governance. Do not confuse agile with an absence of planning.'},
8:{title:'Cover the updated Business Environment domain',focus:'Governance, organizational change, sustainability, and AI scenarios.',tasks:[
'Spend 2.5 hours studying the four lessons and building a Business Environment knowledge map.',
'Complete 4 hours of formal training, reaching a planned cumulative 31 hours this week; check documentation requirements.',
'Spend 2 hours on 40 business scenarios, practicing trade-offs among value, compliance, and long-term impacts.',
'Spend 1 hour reviewing recurring mistakes from the first seven weeks and keep 0.5 hour for remaining gaps.'
],checkpoint:'Explain human oversight of AI, data protection, benefit ownership, and operational readiness; look beyond schedule and cost.'},
9:{title:'Run the first systematic gap review',focus:'Move from chapter-based study to mixed scenario judgment.',tasks:[
'Spend 1 hour studying scenario-question analysis and creating your own four-step reading process.',
'Complete 60 timed questions in about 80 minutes, then spend 1.5 hours reviewing each one.',
'Complete 4 hours of formal training to reach 35 cumulative hours and verify valid documentation; if already completed, study weak areas.',
'Spend 1.5 hours revisiting your weakest domain and spaced-review mistakes. Avoid raising scores solely by repeating familiar questions.'
],checkpoint:'Identify your three leading error types and specific improvements. A 60-question score on this site is a learning signal, not a prediction of passing.'},
10:{title:'Improve consistency and reading pace',focus:'Test performance on unfamiliar questions and reduce recurring errors.',tasks:[
'Complete another 60-question timed session in 80 minutes, prioritizing unseen questions.',
'Spend 2.5 hours reviewing errors, writing down the mistaken concept, correct reasoning, and clues to recognize next time.',
'Spend 2 hours using credible external practice or formal course materials to test knowledge transfer.',
'Spend 1.5 hours reviewing weak lessons and formulas, and retain about 1 hour of buffer.'
],checkpoint:'Aim for roughly 75% or above consistently across two unfamiliar-question sessions, with no domain substantially behind. This is a personal target, not PMI’s passing mark.'},
11:{title:'Practice full-length endurance',focus:'Experience sustained answering and test pacing and attention.',tasks:[
'Set aside a full 4 hours for 180 timed questions, with additional time for planned breaks. This site’s question types and sections do not reproduce the official exam.',
'Spend 2 hours reviewing uncertain and incorrect answers, distinguishing knowledge gaps from fatigue-related mistakes.',
'Spend 1 hour checking application, training documentation, identification, and exam-booking requirements.',
'Allow 1–3 hours for targeted review. The site’s full-length practice overlaps with daily practice, so also use credible unseen questions to verify readiness.'
],checkpoint:'Finish within the time limit with time left to review. If you repeatedly cannot finish or have substantial knowledge gaps, extend preparation by 2–4 weeks.'},
12:{title:'Consolidate, allow buffer, and decide on readiness',focus:'Strengthen weak areas, reduce last-minute cramming, and choose an exam window based on readiness.',tasks:[
'Spend 2 hours reviewing the most important error patterns, knowledge maps, and common formulas.',
'Spend 2 hours on a manageable amount of unseen practice and answer explanations; do not judge readiness by memorized scores.',
'Spend 1 hour rechecking local exam arrangements, identification, travel or equipment requirements.',
'Keep 3–5 hours for rest, catch-up, and unexpected events. Extend the plan by 2–4 weeks if readiness evidence is insufficient.'
],checkpoint:'Choose the exam date based on eligibility, training, local availability, and actual readiness. Twelve weeks is a study target, not a guarantee of passing or an official exam date.'}
});
Object.assign(window.PMP_EN.sources,{
'https://www.pmi.org/certifications/project-management-pmp':{title:'PMI · PMP certification and eligibility',url:'https://www.pmi.org/certifications/project-management-pmp',note:'Check education, project experience, 35 hours of training, and current exam information.'},
'https://www.pmi.org/certifications/project-management-pmp/new-exam':{title:'PMI · The 2026 exam update',url:'https://www.pmi.org/certifications/project-management-pmp/new-exam',note:'The updated international exam launched in July 2026, adding scenarios involving AI, sustainability, and value.'},
'https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/new-pmp-examination-content-outline-2026.pdf':{title:'PMI · 2026 Exam Content Outline',url:'https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/new-pmp-examination-content-outline-2026.pdf',note:'Use the current Exam Content Outline to verify domains, tasks, question formats, and duration.'},
'https://w.pmichina.org/certification/project-management-pmp/new-exam':{title:'PMI China · Updated exam arrangements',url:'https://w.pmichina.org/certification/project-management-pmp/new-exam',note:'The updated mainland China exam takes effect on December 5, 2026. Check local notices for registration and available seats.'},
'https://pmichina.org/pminews/8828.jhtml':{title:'PMI China · Simplified Chinese outline announcement',url:'https://pmichina.org/pminews/8828.jhtml',note:'Confirms a 240-minute updated mainland exam, a 26% Business Environment weighting, and the introduction of graphic and scenario case question formats.'},
'https://scrumguides.org/scrum-guide.html':{title:'Scrum Guide · Official guide',url:'https://scrumguides.org/scrum-guide.html',note:'Consult for further detail on Scrum accountabilities, events, artifacts, and commitments.'}
});
})();
