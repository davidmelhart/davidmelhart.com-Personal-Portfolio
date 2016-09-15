/* !!! ViewModel !!! */

function ViewModel () {
	var self = this;

/* !!! Model !!! */

/* Navi Model */

	self.logo = { 
		logoUrl : "img/logo.png",
		logoDesc : "David Melhart"
	}	

	self.navi = ko.observableArray([
		{
			url : "blog.html",
			title : "Ramblings"
		},
		{
			url : "portfolio.html",
			title : "Portfolio"
		},
		{
			url : "publications.html",
			title : "Publications"
		},
		{
			url : "about.html",
			title : "About"
		},
		{
			url : "contact.html",
			title : "Contact"
		},
	]);

/* Social Model */
	
	self.social = ko.observableArray([
		{
			url : "https://www.facebook.com/david.melhart",
			icon : "img/facebook.png",
			highlight : "img/facebook-hl.png",
			desc: "facebook"
		},
		{
			url : "https://twitter.com/DavidMelhart",
			icon : "img/twitter.png",
			highlight : "img/twitter-hl.png",
			desc : "twitter"
		},
		{
			url : "https://hu.linkedin.com/in/davidmelhart",
			icon : "img/linkedin.png",
			highlight : "img/linkedin-hl.png",
			desc : "linkedin"
		},
		{
			url : "https://github.com/davidmelhart",
			icon : "img/github.png",
			highlight : "img/github-hl.png",
			desc: "github"
		}
	]);

/* Index Model */

	self.index = {};

/* Portfolio Model */
	self.portfolio = ko.observableArray([
		{
			title : "This very page",
			picture : 
				{
					url: "img/portfolio-personal-page.png",
					alt: "personal portfolio"
				},
			tags : "graphic design, interaction design, JS porgramming, web design",
			link : null,
			text : "The full desktop version of this very site was done in a measly three days, all code, content, and graphics included.",
			content: "<p>I wanted to do something new and fresh very quickly. I decided to use <strong>Knockout.js</strong> to build the site based on a simple view-model pattern.</p><p>I started with a quick sketch in <strong>Photoshop</strong> planning out the basic layout, and general ideas of the words, visual representation, and space. Though I did not plan the content ahead, due to the rapid development, I decided on an upbeat but straightforward language. I knew I wanted to convey playfulness but also reassure the viewer of my skills. To support this I went with a clean design with high contrast. First and foremost, I wanted my site to be easily accessible and readable. I set large font-sizes and decided on an ever-visible navigation bar with strong graphical indications where the user at on the site. But I wanted to keep my page whimsical, so I settled on a pixel-like typeface for the larger, easily readable headlines.</p><img src='img/portfolio-personal-page-1.png'><p>I wanted to keep the basic design of the page simple, so I went with flat aesthetics but I wanted to capitalise on space. The obvious solution was to add subtle, short 3D transformations to the navigation, reinforcing the pixely, blocky feeling of the page.</p><img src='img/portfolio-personal-page-2.png'><p>This, of course, determined the basic behaviour of the site. I made the modals slide in a similar manner and the whole page started to feel more tangible. However, I didn't want to go overboard, so I decided to keep the buttons simple, to gain some speed. The simple button design now used basic CSS to imitate as if they were pushed back into the page.</p><p>The general simplicity of the layout gives a clear structure that helps the user keep a lot of free cognitive resources for navigation. Buttons and interactive elements are clearly signified, and users can always keep track of their position on the site by looking at the navigation bar.</p><p>Bulk of the content was written after the page structure was done. Although this is usually unfortunate, I had clear ideas what kind of content I wanted and working as the only developer, I was able to move much quickly with the project. As mentioned above, I wanted to give a whimsical wink beyond giving a functional presentation of my professional work.</p><p>All in all, I am quite proud of the project and I hope you are enjoying my work and give it a good spin. <strong>;)</strong></p><p><i>Due to the rapidness of the project the site was tested on Chrome and Firefox only. If you encounter any issues, please feel free to contact me. I appreciate the feedback. </i></p>"
		},
		{
			title : "Flying Frenzy",
			picture :
				{
					url: "img/portfolio-flyingfrenzy.png",
					alt: "casual videogame"
				},
			tags : "interaction and UX design, <br>lean development, JS programming, project management, videogame design",
			link : null,
			text : "A small, casual videogame made on an extremely short development time.",
			content: "<p>Oh boy, this was a handful...</p><p><i>Special thanks to my team, <strong>Jose Perez-parras Toledano, Haryo Pambuko Jiwandono,</strong> and <strong>Carlos Abel Garcia</strong>! <br>(From left to right. The last one is me.)</i></p><img src='img/portfolio-flyingfrenzy-1.png'></p><strong>Flying Frenzy</strong> is our winning project from the <strong>Multidisciplinary Game Research</strong> course at <strong>Utrecht University Summer School</strong>. The project was very simple yet quite challenging as we only had eight to ten hours in total to deliver. The task was to design and present a simple JavaScript game using a fast brainstorming method and a simplified version of the <strong>Powerup.js</strong> game engine. We had two capable programmers (including myself) so while we all participated in the brainstorming and designing part, the actual implementation rested on half of the team.</p><p>Our basic idea of a platformer where the player has to escape several enemies gradually shifted towards the finished product as we tried to capitalise on our emerging options.</p><p>Our development strategy was to do whatever we all feel comfortable with, working democratically on the long run. However, the step-by-step decisions had to be made fast so we needed someone who could push the project forward, break ties, and makes strategic decisions. I took the helm early on as the <strong>project manager</strong> and decided on an extreme lean development strategy, given the short timeframe. The only thing we were committed to was to have a game with smooth controls, a simple mechanic, and the feeling of desperation or high adrenalin. Everything else was considered changeable if needed. </p><p>We started the project with free brainstorming. We quickly came up with an idea of a cyber-punk platformer game. I instructed the team to find the minimum viable product (MVP) and the most basic mechanics we <strong>have to</strong> bolt down before doing anything else. I reminded everybody that the aesthetics and narrative of the game at this point is arbitrary and we should focus on the mechanics.</p><p>We identified running and jumping to be the fundamental experience of the game and started to work on an MVP with makeshift prototype graphics.</p><img src='img/portfolio-flyingfrenzy-2.png'><p>We hit the first wall when we couldn't come up with a fast solution to create a jump-arch that feels good, but once the button is pressed, the character is committed to the movement. I decided not to waste production time on coming up with a solution and came up with a workaround.</p><p>We decided to make the player stationary (save for the linear jumping) and move everything else against her. This created the illusion of speed and the perfect jump arch. We basically ended up with an endless-runner.</p><p>At this point we got much more comfortable and decided to make some animations and start working on the aesthetics of the game. The problem was that the <strong>animation module was missing</strong> from the engine. We tried to figure out how to implement animation but the original engine was in the way. There was a lot of things going on inside of it and we weren't sure how to weld something on so quickly.</p><p>I worked overnight, but couldn’t come up with a solution. I knew we had to eliminate animations but that also meant that we couldn’t have a humanoid character. It would just look silly.</p><p>Then it struck me. We just need a sprite that wouldn't do that much animation on the first place. Airplanes pop into my mind instantly and I drew up a small pixel-art plane. I rotated the screen and made some modifications to the controls and walked in the next day ready to convince the team to drop most of our original idea.</p><img src='img/portfolio-flyingfrenzy-3.png'><p>The team loved the little airplane and we started to work on additional graphics and functions. In the last hour or two everything fell into place save for a few minor glitches.</p><img src='img/portfolio-flyingfrenzy-4.png'><p>The game was evaluated on the last day of the summer school by the leader of the programming workshop, <strong>Arjan Egges</strong> and associates of the <a class='link' href='http://www.dutchgamegarden.nl/'>Dutch Game Garden</a>.</p><p>We came out victorious from this in-house competition and the project was praised for the disciplined development strategy and for feeling like an actual game despite the short development time.</p><p><i>The game will be uploaded and playable shortly. The team decided to spend a few hours on polishing it up before releasing it to the public.</i></p>"
		},
		{
			title : "A Freelancing Example",
			picture : 
				{
					url: "img/portfolio-freelancing.png",
					alt: "freelancing example"
				},
			tags : "graphic design, web design",
			link : null,
			text : "A short account of an old project of mine with reflections to freelance work.",
			content: "<p>Let's be frank, entry level freelancing work is usually not the most rewarding. One has to deal with a lot of pushback and needy clients, but it is also an opportunity for learning and growth.</p><p>I did a lot of freelancing work, mostly collaborating with a German firm, Visual Impact Studio. The Huge bulk of the job was to design websites for small businesses, provide graphics such as icons and infographics, and wireframes. My connection with this company rapidly grew into a fruitful relationship and I was able to participate in countless projects as a freelance contractor.</p><p>I would be able to dump a huge bulk of images here of several designs but instead, I have chosen one project that I particularly enjoyed.</p><p>The project was to design the visual representation of a small, gourmet butcher shop's full website. This job was close to my heart because I got relatively great freedom in designing the whole site. Only basic guidelines, like preferred colours, requested pages, and some of the content was given.</p><p>The client wanted something to convey a cosy feeling of familiarity while keeping the page professional and structured. Since the text content was already decided, and the coding was passed on to someone else, with whom I had no connection, I only had to deal with the visual representation of the page.</p><p>First, we settled on the colour palette of dark red, sand, and navy blue. This gave a classical triad colour scheme that conveys balance while maintaining a good contrast. I decided to use the warm colours of out scheme predominantly to create a cosy atmosphere.</p><p>To create a rustic, homely feeling, I used a <strong>sekuomorph-like design</strong>. The background was made to resemble a tablecloth with a faint textile-like texture. The header and sidebars were designed to look like interconnected ribbons and tags with sewn patterns around the edges.</p><img src='img/portfolio-freelancing-1.png'><p> I kept the mindset of designing something tactile during the whole process, only breaking the rule where it was necessary for the functionality of the site.</p><img src='img/portfolio-freelancing-2.png'><p>To top it off, I designed and drew patch-like icons for main menu items.</p><img src='img/portfolio-freelancing-3.png'><p>The finished product was more than satisfactory. It had a professional look and structure, while still maintaining a rustic and tactile feeling. The skeuomorph elements were blended with functional patterns, familiar from classical web design traditions.</p><img src='img/portfolio-freelancing-4.png'><p>Of course, during the project I had to communicate with my employer, introducing changes, and providing him and the client with several designs options on occasion. These alternative designs were provided along with written considerations and consulting about the general design directions.</p><p>During my freelance work in general, I learned how to negotiate over features and how to communicate my ideas. I became much more flexible and creative while trying to satisfy my employer's and client's ideas and demands, often working on strict deadlines and planning around last-minute modifications.</p>"
		}
	]);

	var portfolioId = 0;
	for (var item in self.portfolio()){
		self.portfolio()[item].id = portfolioId;
		portfolioId++;
	}

/* Publications Model */
	self.publications = ko.observableArray([
		{
			title: "Frustration and Adaptation: Orientational Shifts in Motivation",
			apa: "Melhart, D. (2016, August) Frustration and Adaptation: Orientational Shifts in Motivation. In <i>Proceedings of 1st International Joint Conference of DiGRA and FDG.</i> 56-57.",
			description: "The presented extended abstract reports the findings of a study on frustration and motivation in video games. The research found that after initial intrinsically motivating game segments, players kept playing through frustrating scenarios, wanting to achieve the initial positive experience. Using this object of interest as an extrinsic reward, they successfully averted the frustrating segment and then reverted to their initial state of intrinsic interest. This suggests a process, in which under frustration the perceived locus of causality of players’ motivation is situationally shifting from intrinsic to extrinsic, while their object of interest and intrinsic contextual motivation stays the same.",
			link: "https://www.researchgate.net/publication/306347316_Frustration_and_Adaptation_Orientational_Shifts_in_Motivation"
		},
		{
			title: "Frustration and Adaptation: A PROTOTYPICAL MODEL OF ORIENTATIONAL SHIFTS IN SITUATIONAL MOTIVATION DURING VIDEO GAME PLAY",
			apa: "Melhart, D. (2016, March) Frustration and Adaptation: A Prototypical Model of Orientational Shifts in Situational Motivation During Video Game Play. <i>Master's Thesis.</i> University of Copenhagen, Denmark.",
			description: "The thesis found its motivation in the fact that the prominent literature is lacking a deeper understanding of micro changes in motivation during video game play. The paper presents the findings of a research concerning how players react to frustrating game segments in inherently enjoyable gameplay and what keeps players motivated in these scenarios. The research utilised semi-structured interviews with 9 young (age M=26) male participants and template analysis as its methodological framework. The result of the study is a theoretical model of a process of orientational shifts in situational motivation. It shows how the motivational system of Self-Determination Theory and the Hierarchical Model of Motivation could be understood in terms of attentional and informational processing system, present in Flow Theory. The results of the thesis also imply the positive utility of extrinsic motivators in frustrating gameplay situations. The model provides a clear vocabulary that can complement the fast paste and complex environment of video games, while help comprehending the players’ subjective experience and changing intentions.",
			link: "https://www.researchgate.net/publication/305607654_Frustration_and_Adaptation_A_Prototypical_Model_of_Orientational_Shifts_in_Situational_Motivation_during_Video_Game_Play"
		}
	]);

/* About Model */

	self.about = {
		intro: "<p>Here you can find a long list of all my experiences and accomplishments. But between these lines, there also lies a story of personal and professional growth and development. I look back at these accomplishments with pride but I hold my head waiting eagerly for what the future holds...</p>",
		education : ko.observableArray([
			{
				title: "Cognition & Communication - Master of Arts",
				institution: "University of Copenhagen",
				location: "Copenhagen, Denmark",
				date: "2013-2016",
				description: "Cognition and Communication is a truly multidisciplinary field. It combines qualitative research and survey methods with the experience of mediated communication and interaction. My studies were focused on human factors, especially communication and interaction. Although the training was mainly centred around the planning and implementation of communicative assignments, and planning and consulting in relation to the production of audiovisual fiction and other media contents. I grew and learned a lot as an interaction and UX designer, armed with potent knowledge about psychology."
			},
			{
				title: "Communication & Media Theory - BA Supplementary Studies",
				institution: "Corvinus University of Budapest",
				location: "Budapest, Hungary",
				date: "2012-2013",
				description: "My supplementary studies helped me understand classic and current theories of communication and the basic concepts in cognitive science better, focusing on memory and attention, while also providing me with experience and qualification in written and verbal business communication."
			},
			{	title: "Political Science - Bachelor of Arts",
				institution: "Pázmány Péter Catholic University",
				location: "Piliscsaba, Hungary",
				date: "2008-2012",
				description: "Although not much is applicable from political science to what I do today, I learned co-operation and empathy during my Bachelor years, while gaining communication skills, command of foreign languages, and a great devotion to quality and responsibility."
			}
		]),
		courses : ko.observableArray([
			{
				title: "Multidisciplinary Game Research",
				institution: "Utrecht University Summer School",
				location: "Utrecht, Netherlands",
				date: "August 2016",
				description: "During the summer school, I gained a more detailed insight into theories for the analysis of rules and narratives, while also practising co-operation, project management, interaction and UX design, and object-oriented JS programming."
			},
			{
				title: "User Experience Design Fundamentals",
				institution: "Udemy",
				location: "Online",
				date: "September 2016",
				description: "In this online course, I gained a better understanding of formal user experience design practises and the critical elements of user experience - strategy, scope, structure, skeleton and surface. Although the course had little new information to offer in terms of theory, it provided me with insight into the management of used experience projects."
			},
			{
				title: "Front-End Web Developer",
				institution: "Udacity",
				location: "Online",
				date: "May 2015",
				description: "During this intense online degree, I learned HTML5, CSS3, procedural and object-oriented programming in JavaScript and jQuery, third party API implementation, website testing and optimisation, design thinking and problem solving."
			},
			{
				title: "Introduction to Game Localization",
				institution: "Udemy",
				location: "Online",
				date: "June 2015",
				description: "In this online course, I learned a lot about the production cycle of videogames and lot of tricks and methods of QA and localisation testing."
			}
		]),
		experience : ko.observableArray([
			{
				title: "Master's Thesis Project",
				institution: "University of Copenhagen",
				location: "Copenhagen, Denmark",
				date: "September 2015 - January 2016",
				description: "My thesis project was a full-fledged qualitative study with critical literature review, sampling, data gathering and processing, analysing, and theory building. Apart from moderate supervisory meetings, I carried out the research on my own. The project was aimed to discover why players continue to play after encountering frustrating scenarios in video games. The result of the study was a theoretical model of orientational shifts in the players’ moment-to-moment motivation.<br>Supervisor: <strong>Andreas Lindegaard Gregersen</strong>"
			},
			{
				title: "Team Guide",
				institution: "Udacity",
				location: "Online Telework",
				date: "September 2015 - December 2015",
				description: "I worked for Udacity through online telework. I was charged with guiding and supporting the development of web developer students by organising study room sessions. I had to gather, organise, and present educational materials, host and coordinate study sessions, and occasionally provide one-on-one guidance and educational support. My main task was to help the students in their self-evaluation and goal-setting, while providing motivational and emotional support, and also mediate the communication between them and our technical support.<br>I almost exclusively worked with US students, which meant that I had to work late hours but I was able to work on my time management skills."
			},
			{
				title: "Director & Lead Designer",
				institution: "WireMind Ltd",
				location: "Copenhagen, Denmark",
				date: "2013 - 2015",
				description: "During my run as an owner of a two-man web design firm, I learned basic management and consulting skills. I had the opportunity to put my business communication skills to the test and hone my knowledge in user interface and experience design under great pressure."

			},
			{
				title: "Graphic & Web Designer",
				institution: "Freelancing",
				location: "Copenhagen, Denmark",
				date: "2013 - 2016",
				description: "As a freelancer I had my fair share of odd jobs ranging from magazine layout and typesetting through creating flyers to designing websites. During this time, I learned a great deal of flexibility, and how to work rigorously under pressure. I was also able to gain a high expertise with Adobe Photoshop, Illustrator, and InDesign."

			},
			{
				title: "Publicist & Co-Editor",
				institution: "Publius, political commentary blog for young liberals",
				location: "Budapest, Hungary",
				date: "since May 2012",
				description: "As part of the editorial team, I had to work on maintaining the consistency and integrity of the site's profile and quality by fact checking, eliminating jargon, and negotiating, while the publicist work consisted of research, writing, stylistic and structural editing, and rewriting. Working with a vibrant and energetic team, taught me patience and teamwork while receiving critiques and proofreading the article proposals helped me develop my own vocabulary and critical thinking."
			}
		]),
		awards : ko.observableArray([
			{
				title: "Best Game Design and Implementation",
				institution: "Utrecht University Summer School & Dutch Game Garden",
				location: "Budapest, Hungary",
				date: "August 2016 ",
				description: "The project was to design and implement a small-scale JavaScript based game under eight hours of work in a team of four. It was a pretty intense experience. I get to work as a developer and project manager at the same time. I led the group using lean-development principles, but took my fair share from the art, interaction design, and programming work too."
			}
		]),
		presentations : ko.observableArray([
			{
				title: "Frustration and Adaptation: Orientational Shifts in Motivation",
				institution: "First International Conference of DiGRA and FDG",
				location: "Dundee, Scotland",
				date: "August 2016 ",
				description: "I held this acclaimed presentation during the first ever joint conference of the Digital Games Research Association (DiGRA) and the Foundation of Digital Games (FDG). The presentation detailed a theoretical model of hierarchical motivational structure in video game play and argued the need for a better understanding of moment-to-moment changes in player motivation, and the utility of extrinsic motivation in sub-optimal gameplay scenarios."
			}
		]),
		memberships : ko.observableArray([
			{
				title: "DiGRA Membership",
				institution: "Digital Games Research Association",
				location: "DiGRA",
				date: "2016 ",
				description: ""
			}
		]),
		community : ko.observableArray([
			{
				title: "Volunteer Bartender",
				institution: "Studenterhuset, Student bar and café of the University of Copenhagen",
				location: "Copenhagen, Denmark",
				date: "2013 - 2015",
				description: "Epic."
			}
		]),
		CVtext : "Phew... After this wall of text, you can get a condensed version of my resume by clicking the button below.",
		CVlink : "docs/David-Melhart-CV.pdf"
	};

	self.contact = {
		email: "hello@davidmelhart.com",
		phone: "+36 30 92 78 664"
	};



/* !!! Controler !!! */

/* Handling fixed scrolling menu */
$(function() {
    var nav = $('#header_container');
    var social = $('#navi_social')
    var menu = $('#main_navigation')
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var screen = $(window);
    screen.scroll(function() {
        var scrollTop = screen.scrollTop();
        var shouldBeFixed = scrollTop > (navHomeY + 20);
        if (shouldBeFixed && !isFixed) {
        	menu.toggleClass("scroll_menu");
        	nav.toggleClass("scroll_container");
            social.css({	
            	display: 'none'
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
        	menu.toggleClass("scroll_menu");
        	nav.toggleClass("scroll_container");
            social.css({
            	display: 'flex'
            });
            isFixed = false;
        }
    });


});

/* This sets the title of the page red, so the user can clearly see where she's at */
// .ready() somehow not working, setting 1ms timeout so the DOM can load up
setTimeout(function(){
	var current = $("body").attr("data-title");	
  	for (item in self.navi()) {
   		if (current === self.navi()[item].title){
   			$("#" + current).css({
                background: "#191919",
                color: "white"
            });
   		}
   	}
}, 1);


/* Functions for modals */
    self.toggleBodyModalOpen = function(data, event) {
    	$("body").toggleClass("modal_open")
    }

    self.toggleModalOpen = function(data, event) {
    	var currentModal = $("#modal_" + data.id);

    	currentModal.toggleClass("modal_hidden");
    	currentModal.toggleClass("modal_visible");
    }

    self.modalToggle = function(data, event) {
    	self.toggleBodyModalOpen();
    	self.toggleModalOpen(data, event);
    	$(".modal").scrollTop(0);
    }

/* Mobile Menu */
	var menuMobile = $("#mobile_header");

	self.menuToggle = function() {
		menuMobile.toggleClass("menu_visible");
		menuMobile.toggleClass("menu_hidden");
	}

};
/* Apply ViewModel */
ko.applyBindings(new ViewModel());