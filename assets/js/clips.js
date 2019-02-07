/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/clips.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_clips sync recursive .md":
/*!*************************!*\
  !*** ./_clips sync .md ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./2014-11-05-Stanford-chemical-engineers-borrow-technique-from-petrochemical-industry-to-store-solar-energy.md\": \"./_clips/2014-11-05-Stanford-chemical-engineers-borrow-technique-from-petrochemical-industry-to-store-solar-energy.md\",\n\t\"./2014-11-12-Two-Stanford-engineering-professors-elected-fellows-of-the-American-Society-of-Mechanical-Engineers.md\": \"./_clips/2014-11-12-Two-Stanford-engineering-professors-elected-fellows-of-the-American-Society-of-Mechanical-Engineers.md\",\n\t\"./2014-11-17-A-passion-brewing.md\": \"./_clips/2014-11-17-A-passion-brewing.md\",\n\t\"./2014-11-26-Stanford-engineers-invent-high-tech-mirror-to-beam-heat-away-from-buildings-into-space.md\": \"./_clips/2014-11-26-Stanford-engineers-invent-high-tech-mirror-to-beam-heat-away-from-buildings-into-space.md\",\n\t\"./2014-12-01-Without-draconian-measures-global-population-boom-is-locked-in.md\": \"./_clips/2014-12-01-Without-draconian-measures-global-population-boom-is-locked-in.md\",\n\t\"./2014-12-02-Stanford-engineers-take-big-step-toward-using-light-instead-of-wires-inside-computers.md\": \"./_clips/2014-12-02-Stanford-engineers-take-big-step-toward-using-light-instead-of-wires-inside-computers.md\",\n\t\"./2014-12-05-Four-Stanford-engineering-professors-named-IEEE-fellows.md\": \"./_clips/2014-12-05-Four-Stanford-engineering-professors-named-IEEE-fellows.md\",\n\t\"./2014-12-08-Stanford-engineering-professor-Richard-Luthy-receives-distinguished-environmental-engineering-award.md\": \"./_clips/2014-12-08-Stanford-engineering-professor-Richard-Luthy-receives-distinguished-environmental-engineering-award.md\",\n\t\"./2014-12-16-Scientists-trying-to-create-exoplanet-zoo.md\": \"./_clips/2014-12-16-Scientists-trying-to-create-exoplanet-zoo.md\",\n\t\"./2014-12-16-Stanford-to-host-100-year-study-on-artificial-intelligence.md\": \"./_clips/2014-12-16-Stanford-to-host-100-year-study-on-artificial-intelligence.md\",\n\t\"./2014-12-17-An-updated-geological-timeline-for-the-extinction-of-the-dinosaurs.md\": \"./_clips/2014-12-17-An-updated-geological-timeline-for-the-extinction-of-the-dinosaurs.md\",\n\t\"./2014-12-17-Stanford-bioengineers-discover-knob-to-dial-up-fitter-cells.md\": \"./_clips/2014-12-17-Stanford-bioengineers-discover-knob-to-dial-up-fitter-cells.md\",\n\t\"./2014-12-19-Data-from-space-illuminates-Calaveras-creep.md\": \"./_clips/2014-12-19-Data-from-space-illuminates-Calaveras-creep.md\",\n\t\"./2014-12-19-Stanford-computer-scientists-extend-Web-browsers-to-make-the-Internet-safer.md\": \"./_clips/2014-12-19-Stanford-computer-scientists-extend-Web-browsers-to-make-the-Internet-safer.md\",\n\t\"./2014-12-23-Tornadoes-On-The-Sun.md\": \"./_clips/2014-12-23-Tornadoes-On-The-Sun.md\",\n\t\"./2014-12-26-Community-garden-teaches-water-saving-strategies.md\": \"./_clips/2014-12-26-Community-garden-teaches-water-saving-strategies.md\",\n\t\"./2015-01-08-Sparing-the-Air-Campaign-comes-to-Monterey.md\": \"./_clips/2015-01-08-Sparing-the-Air-Campaign-comes-to-Monterey.md\",\n\t\"./2015-01-12-Private-parcel-added-to-Los-Padres-National-Forest.md\": \"./_clips/2015-01-12-Private-parcel-added-to-Los-Padres-National-Forest.md\",\n\t\"./2015-01-17-A-winters-watch-Scientists-track-whale-migration-from-Big-Sur-bluffs.md\": \"./_clips/2015-01-17-A-winters-watch-Scientists-track-whale-migration-from-Big-Sur-bluffs.md\",\n\t\"./2015-01-19-MLK-Day-Seaside-speaker-urges-audience-to-break-out-of-rut.md\": \"./_clips/2015-01-19-MLK-Day-Seaside-speaker-urges-audience-to-break-out-of-rut.md\",\n\t\"./2015-01-21-King-tides-a-peek-into-Monterey-future.md\": \"./_clips/2015-01-21-King-tides-a-peek-into-Monterey-future.md\",\n\t\"./2015-01-26-Monarchs-on-the-move-Warm-weather-spurred-butterfly-activity.md\": \"./_clips/2015-01-26-Monarchs-on-the-move-Warm-weather-spurred-butterfly-activity.md\",\n\t\"./2015-01-28-Climate-lobby-takes-root-in-Monterey.md\": \"./_clips/2015-01-28-Climate-lobby-takes-root-in-Monterey.md\",\n\t\"./2015-02-02-In-Carmel-a-cool-way-to-heal-minus-270-degree-air-baths.md\": \"./_clips/2015-02-02-In-Carmel-a-cool-way-to-heal-minus-270-degree-air-baths.md\",\n\t\"./2015-02-04-Obama-seeks-$30M-for-ocean-acidification-studies.md\": \"./_clips/2015-02-04-Obama-seeks-$30M-for-ocean-acidification-studies.md\",\n\t\"./2015-02-10-Montereys-Middlebury-Institute-plunges-into-water-issues.md\": \"./_clips/2015-02-10-Montereys-Middlebury-Institute-plunges-into-water-issues.md\",\n\t\"./2015-02-11-Monning-again-pushes-for-warning-labels-on-soda.md\": \"./_clips/2015-02-11-Monning-again-pushes-for-warning-labels-on-soda.md\",\n\t\"./2015-02-14-3-D-Imaging-Techniques-Help-Surgeons-Construct-New-Faces.md\": \"./_clips/2015-02-14-3-D-Imaging-Techniques-Help-Surgeons-Construct-New-Faces.md\",\n\t\"./2015-02-16-CSUMB-study-backs-targeted-bottom-trawling.md\": \"./_clips/2015-02-16-CSUMB-study-backs-targeted-bottom-trawling.md\",\n\t\"./2015-02-18-Big-Sur-condors-to-act-as-surrogates-for-Idaho-eggs.md\": \"./_clips/2015-02-18-Big-Sur-condors-to-act-as-surrogates-for-Idaho-eggs.md\",\n\t\"./2015-02-23-Expanded-protected-area-for-orcas-to-be-studied.md\": \"./_clips/2015-02-23-Expanded-protected-area-for-orcas-to-be-studied.md\",\n\t\"./2015-02-25-Monterey-Airport-runway-project-on-schedule.md\": \"./_clips/2015-02-25-Monterey-Airport-runway-project-on-schedule.md\",\n\t\"./2015-03-04-Carmel-teens-making-international-splash.md\": \"./_clips/2015-03-04-Carmel-teens-making-international-splash.md\",\n\t\"./2015-03-05-Building-muscle-Stevenson-student-wins-national-engineering-competition.md\": \"./_clips/2015-03-05-Building-muscle-Stevenson-student-wins-national-engineering-competition.md\",\n\t\"./2015-03-05-Underwater-robots-Aptos-High-club-seeks-to-regain-world-championship.md\": \"./_clips/2015-03-05-Underwater-robots-Aptos-High-club-seeks-to-regain-world-championship.md\",\n\t\"./2015-03-09-Sardine-ban-looms-as-fishermen-weigh-disaster-funds.md\": \"./_clips/2015-03-09-Sardine-ban-looms-as-fishermen-weigh-disaster-funds.md\",\n\t\"./2015-03-11-Ocean-glider-helps-keep-an-eye-on-marine-life.md\": \"./_clips/2015-03-11-Ocean-glider-helps-keep-an-eye-on-marine-life.md\",\n\t\"./2015-03-16-How-Does-A-Young-Brain-Read.md\": \"./_clips/2015-03-16-How-Does-A-Young-Brain-Read.md\",\n\t\"./2015-03-16-Stanford-researchers-unravel-secrets-of-shape-shifting-bacteria.md\": \"./_clips/2015-03-16-Stanford-researchers-unravel-secrets-of-shape-shifting-bacteria.md\",\n\t\"./2015-04-10-Vampire-bats-have-a-taste-for-bacon.md\": \"./_clips/2015-04-10-Vampire-bats-have-a-taste-for-bacon.md\",\n\t\"./2015-04-10-Why-ants-dont-get-into-traffic-jams.md\": \"./_clips/2015-04-10-Why-ants-dont-get-into-traffic-jams.md\",\n\t\"./2015-04-13-How-sea-snails-learned-to-gobble-fish.md\": \"./_clips/2015-04-13-How-sea-snails-learned-to-gobble-fish.md\",\n\t\"./2015-04-17-Colors-help-set-bodys-internal-clock.md\": \"./_clips/2015-04-17-Colors-help-set-bodys-internal-clock.md\",\n\t\"./2015-05-05-What-your-smile-says-about-where-youre-from.md\": \"./_clips/2015-05-05-What-your-smile-says-about-where-youre-from.md\",\n\t\"./2015-05-08-Bats-open-wide-to-focus-their-ultrasonic-beams.md\": \"./_clips/2015-05-08-Bats-open-wide-to-focus-their-ultrasonic-beams.md\",\n\t\"./2015-05-11-Many-twin-stars-may-actually-be-triplets.md\": \"./_clips/2015-05-11-Many-twin-stars-may-actually-be-triplets.md\",\n\t\"./2015-05-29-Rock-paper-scissors-may-explain-evolutionary-games-in-nature.md\": \"./_clips/2015-05-29-Rock-paper-scissors-may-explain-evolutionary-games-in-nature.md\",\n\t\"./2015-06-17-Deep-sea-sharks-show-surprising-buoyancy.md\": \"./_clips/2015-06-17-Deep-sea-sharks-show-surprising-buoyancy.md\",\n\t\"./2015-06-22-Aptos-High-Robotics.md\": \"./_clips/2015-06-22-Aptos-High-Robotics.md\",\n\t\"./2015-07-10-Energetic-bacteria-form-frictionless-superfluids.md\": \"./_clips/2015-07-10-Energetic-bacteria-form-frictionless-superfluids.md\",\n\t\"./2015-07-16-Polar-bear-metabolism-cannot-cope-with-ice-loss.md\": \"./_clips/2015-07-16-Polar-bear-metabolism-cannot-cope-with-ice-loss.md\",\n\t\"./2015-07-16-Spain-and-Chile-chosen-to-host-gamma-ray-telescope.md\": \"./_clips/2015-07-16-Spain-and-Chile-chosen-to-host-gamma-ray-telescope.md\",\n\t\"./2015-07-20-Shoddy-strut-likely-culprit-in-SpaceX-rocket-wreck.md\": \"./_clips/2015-07-20-Shoddy-strut-likely-culprit-in-SpaceX-rocket-wreck.md\",\n\t\"./2015-07-28-Budget-showdown-leaves-US-science-agencies-in-limbo.md\": \"./_clips/2015-07-28-Budget-showdown-leaves-US-science-agencies-in-limbo.md\",\n\t\"./2015-07-28-Historic-human-burials-identified.md\": \"./_clips/2015-07-28-Historic-human-burials-identified.md\",\n\t\"./2015-08-03-Physicists-announce-graphenes-latest-cousin-stanene.md\": \"./_clips/2015-08-03-Physicists-announce-graphenes-latest-cousin-stanene.md\",\n\t\"./2015-08-04-Heard-it-from-a-bird.md\": \"./_clips/2015-08-04-Heard-it-from-a-bird.md\",\n\t\"./2015-08-04-What-are-finches-saying-to-each-other.md\": \"./_clips/2015-08-04-What-are-finches-saying-to-each-other.md\",\n\t\"./2015-08-14-Developing-El-Nino-could-be-strongest-on-record.md\": \"./_clips/2015-08-14-Developing-El-Nino-could-be-strongest-on-record.md\",\n\t\"./2015-09-08-Online-security-braces-for-quantum-revolution.md\": \"./_clips/2015-09-08-Online-security-braces-for-quantum-revolution.md\",\n\t\"./2015-09-14-California-snowpack-lowest-in-past-500-years.md\": \"./_clips/2015-09-14-California-snowpack-lowest-in-past-500-years.md\",\n\t\"./2015-09-24-Nobel-speculation-kicks-into-high-gear.md\": \"./_clips/2015-09-24-Nobel-speculation-kicks-into-high-gear.md\",\n\t\"./2015-09-25-Maths-whizz-solves-a-masters-riddle.md\": \"./_clips/2015-09-25-Maths-whizz-solves-a-masters-riddle.md\",\n\t\"./2015-09-30-US-budget-deal-averts-government-shutdown.md\": \"./_clips/2015-09-30-US-budget-deal-averts-government-shutdown.md\",\n\t\"./2015-10-07-From-speculation-to-surprise-science-Twittersphere-reacts-to-Nobel-prizewinners.md\": \"./_clips/2015-10-07-From-speculation-to-surprise-science-Twittersphere-reacts-to-Nobel-prizewinners.md\",\n\t\"./2015-10-13-Zero-gravity-genomics-passes-first-test.md\": \"./_clips/2015-10-13-Zero-gravity-genomics-passes-first-test.md\",\n\t\"./2015-10-23-US-astronomers-stuck-in-grant-rejection-cycle.md\": \"./_clips/2015-10-23-US-astronomers-stuck-in-grant-rejection-cycle.md\",\n\t\"./2015-10-28-Rosetta-sniffs-oxygen-around-comet-67P.md\": \"./_clips/2015-10-28-Rosetta-sniffs-oxygen-around-comet-67P.md\",\n\t\"./2015-10-28-US-budget-deal-could-ease-uncertainty-over-science-spending.md\": \"./_clips/2015-10-28-US-budget-deal-could-ease-uncertainty-over-science-spending.md\",\n\t\"./2015-11-06-Light-and-heat-propel-bendy-graphene-crawlers.md\": \"./_clips/2015-11-06-Light-and-heat-propel-bendy-graphene-crawlers.md\",\n\t\"./2015-11-12-Volcanic-rock-hints-at-source-of-Earths-water.md\": \"./_clips/2015-11-12-Volcanic-rock-hints-at-source-of-Earths-water.md\",\n\t\"./2015-11-18-Cultural-differences-determine-when-kids-learn-to-play-fair.md\": \"./_clips/2015-11-18-Cultural-differences-determine-when-kids-learn-to-play-fair.md\",\n\t\"./2015-11-19-Graph-theory-breakthrough-tantalizes-mathematicians.md\": \"./_clips/2015-11-19-Graph-theory-breakthrough-tantalizes-mathematicians.md\",\n\t\"./2015-12-03-What-were-reading-day-4.md\": \"./_clips/2015-12-03-What-were-reading-day-4.md\",\n\t\"./2015-12-04-What-were-reading-day-5.md\": \"./_clips/2015-12-04-What-were-reading-day-5.md\",\n\t\"./2015-12-05-What-were-reading-day-6.md\": \"./_clips/2015-12-05-What-were-reading-day-6.md\",\n\t\"./2015-12-07-What-were-reading-day-8.md\": \"./_clips/2015-12-07-What-were-reading-day-8.md\",\n\t\"./2015-12-08-What-were-reading-day-9.md\": \"./_clips/2015-12-08-What-were-reading-day-9.md\",\n\t\"./2015-12-10-What-were-reading-day-11.md\": \"./_clips/2015-12-10-What-were-reading-day-11.md\",\n\t\"./2015-12-11-What-were-reading-day-12.md\": \"./_clips/2015-12-11-What-were-reading-day-12.md\",\n\t\"./2015-12-18-Biomedicine-wins-big-in-US-budget-deal.md\": \"./_clips/2015-12-18-Biomedicine-wins-big-in-US-budget-deal.md\",\n\t\"./2015-12-18-US-toxic-substances-reform-moves-forward.md\": \"./_clips/2015-12-18-US-toxic-substances-reform-moves-forward.md\",\n\t\"./2016-01-19-Ecology-aims-high.md\": \"./_clips/2016-01-19-Ecology-aims-high.md\",\n\t\"./2016-02-08-Nanoscale-cavity-strongly-links-quantum-particles.md\": \"./_clips/2016-02-08-Nanoscale-cavity-strongly-links-quantum-particles.md\",\n\t\"./2016-03-01-QuICS-Researcher-Works-to-Illuminate-the-Power-of-Quantum-Computers.md\": \"./_clips/2016-03-01-QuICS-Researcher-Works-to-Illuminate-the-Power-of-Quantum-Computers.md\",\n\t\"./2016-03-16-Rogue-rubidium-leads-to-atomic-anomaly.md\": \"./_clips/2016-03-16-Rogue-rubidium-leads-to-atomic-anomaly.md\",\n\t\"./2016-03-30-Measuring-the-magnetization-of-wandering-spins.md\": \"./_clips/2016-03-30-Measuring-the-magnetization-of-wandering-spins.md\",\n\t\"./2016-04-13-No-Time-Like-the-Present-for-Quantum-Programming-Says-QuICS-Postdoc.md\": \"./_clips/2016-04-13-No-Time-Like-the-Present-for-Quantum-Programming-Says-QuICS-Postdoc.md\",\n\t\"./2016-04-22-Oscillating-currents-point-to-practical-application-for-topological-insulators.md\": \"./_clips/2016-04-22-Oscillating-currents-point-to-practical-application-for-topological-insulators.md\",\n\t\"./2016-05-10-Novel-gate-may-enhance-power-of-Majorana-based-quantum-computers.md\": \"./_clips/2016-05-10-Novel-gate-may-enhance-power-of-Majorana-based-quantum-computers.md\",\n\t\"./2016-05-23-Quantum-cycles-power-cold-atom-pump.md\": \"./_clips/2016-05-23-Quantum-cycles-power-cold-atom-pump.md\",\n\t\"./2016-06-06-Disorder-grants-a-memory-to-quantum-spins.md\": \"./_clips/2016-06-06-Disorder-grants-a-memory-to-quantum-spins.md\",\n\t\"./2016-06-24-Ultra-cold-atoms-may-wade-through-quantum-friction.md\": \"./_clips/2016-06-24-Ultra-cold-atoms-may-wade-through-quantum-friction.md\",\n\t\"./2016-08-03-Federal-report-urges-commitment-to-quantum-research.md\": \"./_clips/2016-08-03-Federal-report-urges-commitment-to-quantum-research.md\",\n\t\"./2016-08-03-Programmable-ions-set-the-stage-for-general-purpose-quantum-computers.md\": \"./_clips/2016-08-03-Programmable-ions-set-the-stage-for-general-purpose-quantum-computers.md\",\n\t\"./2016-08-08-QuICS-hosts-five-day-workshop-on-quantum-complexity-quandary.md\": \"./_clips/2016-08-08-QuICS-hosts-five-day-workshop-on-quantum-complexity-quandary.md\",\n\t\"./2016-09-15-Machine-learning-in-a-quantum-world.md\": \"./_clips/2016-09-15-Machine-learning-in-a-quantum-world.md\",\n\t\"./2016-09-22-QuICS-Hosts-International-Cryptography-Conference-in-Washington-D.C..md\": \"./_clips/2016-09-22-QuICS-Hosts-International-Cryptography-Conference-in-Washington-D.C..md\",\n\t\"./2016-10-04-Physics-Nobel-honors-underpinnings-of-exotic-matter.md\": \"./_clips/2016-10-04-Physics-Nobel-honors-underpinnings-of-exotic-matter.md\",\n\t\"./2016-10-06-A-warm-welcome-for-Weyl-physics.md\": \"./_clips/2016-10-06-A-warm-welcome-for-Weyl-physics.md\",\n\t\"./2016-10-13-LOreal-UNESCO-award-goes-to-former-JQI-student-researcher.md\": \"./_clips/2016-10-13-LOreal-UNESCO-award-goes-to-former-JQI-student-researcher.md\",\n\t\"./2016-10-14-A-closer-look-at-Weyl-physics.md\": \"./_clips/2016-10-14-A-closer-look-at-Weyl-physics.md\",\n\t\"./2016-11-28-Newest-QuICS-Fellow-Brings-a-Mathematicians-Eye-to-Quantum-Puzzles.md\": \"./_clips/2016-11-28-Newest-QuICS-Fellow-Brings-a-Mathematicians-Eye-to-Quantum-Puzzles.md\",\n\t\"./2016-12-21-A-quantum-year-in-review.md\": \"./_clips/2016-12-21-A-quantum-year-in-review.md\",\n\t\"./2017-01-13-QuICS-Sends-Strong-Contingent-to-International-Quantum-Conference.md\": \"./_clips/2017-01-13-QuICS-Sends-Strong-Contingent-to-International-Quantum-Conference.md\",\n\t\"./2017-02-20-QuICS-Hartree-Fellow-Is-Seeking-the-Limits-of-Quantum-Compression.md\": \"./_clips/2017-02-20-QuICS-Hartree-Fellow-Is-Seeking-the-Limits-of-Quantum-Compression.md\",\n\t\"./2017-02-21-Crossing-the-quantum-chaotic-divide.md\": \"./_clips/2017-02-21-Crossing-the-quantum-chaotic-divide.md\",\n\t\"./2017-03-08-Ions-sync-up-into-worlds-first-time-crystal.md\": \"./_clips/2017-03-08-Ions-sync-up-into-worlds-first-time-crystal.md\",\n\t\"./2017-03-10-Wellstood-named-new-UMD-Co-Director-of-JQI.md\": \"./_clips/2017-03-10-Wellstood-named-new-UMD-Co-Director-of-JQI.md\",\n\t\"./2017-04-04-HAWC-high-energy-gamma-rays.md\": \"./_clips/2017-04-04-HAWC-high-energy-gamma-rays.md\",\n\t\"./2017-05-09-Tiny-tug-unleashes-cryogenic-currents.md\": \"./_clips/2017-05-09-Tiny-tug-unleashes-cryogenic-currents.md\",\n\t\"./2017-05-18-The-limits-of-computation.md\": \"./_clips/2017-05-18-The-limits-of-computation.md\",\n\t\"./2017-06-12-Neural-networks-take-on-quantum-entanglement.md\": \"./_clips/2017-06-12-Neural-networks-take-on-quantum-entanglement.md\",\n\t\"./2017-07-12-Atomic-cousins-team-up-in-early-quantum-networking-node.md\": \"./_clips/2017-07-12-Atomic-cousins-team-up-in-early-quantum-networking-node.md\",\n\t\"./2017-07-31-Long-live-MATHUSLA.md\": \"./_clips/2017-07-31-Long-live-MATHUSLA.md\",\n\t\"./2017-08-04-QuICS-Hosts-Workshop-Blending-Computer-Science-and-Modern-Physics.md\": \"./_clips/2017-08-04-QuICS-Hosts-Workshop-Blending-Computer-Science-and-Modern-Physics.md\",\n\t\"./2017-08-23-Newest-QuICS-Fellow-Expands-Research-Beyond-the-Intersection-of-Computer-Science-and-Physics.md\": \"./_clips/2017-08-23-Newest-QuICS-Fellow-Expands-Research-Beyond-the-Intersection-of-Computer-Science-and-Physics.md\",\n\t\"./2017-09-01-Long-range-interactions-leave-a-quantum-reminder.md\": \"./_clips/2017-09-01-Long-range-interactions-leave-a-quantum-reminder.md\",\n\t\"./2017-09-08-QuICS-Brings-200-Scientists-to-UMD-for-Quantum-Error-Correction-Conference.md\": \"./_clips/2017-09-08-QuICS-Brings-200-Scientists-to-UMD-for-Quantum-Error-Correction-Conference.md\",\n\t\"./2017-10-04-The-Nobel-Prize-A-LIGO-QA.md\": \"./_clips/2017-10-04-The-Nobel-Prize-A-LIGO-QA.md\",\n\t\"./2017-11-16-High-altitude-Observatory-Sheds-Light-on-Origin-of-Excess-Anti-matter.md\": \"./_clips/2017-11-16-High-altitude-Observatory-Sheds-Light-on-Origin-of-Excess-Anti-matter.md\",\n\t\"./2017-11-30-Quantum-Physics-and-Gravity-Meet-in-Newest-QuICS-Fellows-Research.md\": \"./_clips/2017-11-30-Quantum-Physics-and-Gravity-Meet-in-Newest-QuICS-Fellows-Research.md\",\n\t\"./2018-01-12-QuICS-Contingent-Heads-to-Premier-Quantum-Information-Conference.md\": \"./_clips/2018-01-12-QuICS-Contingent-Heads-to-Premier-Quantum-Information-Conference.md\",\n\t\"./2018-02-15-JQI_Fellow_Maissam_Barkeshli_receives_2018_Sloan_Research_Fellowship.md\": \"./_clips/2018-02-15-JQI_Fellow_Maissam_Barkeshli_receives_2018_Sloan_Research_Fellowship.md\",\n\t\"./2018-03-09-Physics_at_the_edge_of_the_world.md\": \"./_clips/2018-03-09-Physics_at_the_edge_of_the_world.md\",\n\t\"./2018-03-28-Latest_nanowire_experiment_boosts_confidence_in_Majorana_sighting.md\": \"./_clips/2018-03-28-Latest_nanowire_experiment_boosts_confidence_in_Majorana_sighting.md\",\n\t\"./2018-04-09-Theoretical_model_offers_more_complete_account_of_robotic_gripping_physics.md\": \"./_clips/2018-04-09-Theoretical_model_offers_more_complete_account_of_robotic_gripping_physics.md\",\n\t\"./2018-04-16-Counting_Queries_Helps_New_QuICS_Hartree_Fellow_Bound_Quantum_Advantages.md\": \"./_clips/2018-04-16-Counting_Queries_Helps_New_QuICS_Hartree_Fellow_Bound_Quantum_Advantages.md\",\n\t\"./2018-04-19-Atoms_may_hum_a_tune_from_grand_cosmic_symphony.md\": \"./_clips/2018-04-19-Atoms_may_hum_a_tune_from_grand_cosmic_symphony.md\",\n\t\"./2018-05-03-Metamaterial_foundations_may_offer_buildings_better_earthquake_resistance.md\": \"./_clips/2018-05-03-Metamaterial_foundations_may_offer_buildings_better_earthquake_resistance.md\",\n\t\"./2018-05-31-Ions_drive_macroscopic_flows_in_water.md\": \"./_clips/2018-05-31-Ions_drive_macroscopic_flows_in_water.md\",\n\t\"./2018-06-01-Life-at-the-edge-of-the-world.md\": \"./_clips/2018-06-01-Life-at-the-edge-of-the-world.md\",\n\t\"./2018-06-12-Droplet_networks_rearrange_in_response_to_electrical_ruptures.md\": \"./_clips/2018-06-12-Droplet_networks_rearrange_in_response_to_electrical_ruptures.md\",\n\t\"./2018-06-13-Genetic_algorithms_shape_laser_pulses_to_optimize_plasma_X-ray_production.md\": \"./_clips/2018-06-13-Genetic_algorithms_shape_laser_pulses_to_optimize_plasma_X-ray_production.md\",\n\t\"./2018-06-28-Quantum_gas_reveals_first_signs_of_path-bending_monopole.md\": \"./_clips/2018-06-28-Quantum_gas_reveals_first_signs_of_path-bending_monopole.md\",\n\t\"./2018-07-03-Fusion_reactors_may_get_some_help_from_meandering_electrons.md\": \"./_clips/2018-07-03-Fusion_reactors_may_get_some_help_from_meandering_electrons.md\",\n\t\"./2018-07-05-Inducing_movement_controls_the_emission_of_a_random_laser.md\": \"./_clips/2018-07-05-Inducing_movement_controls_the_emission_of_a_random_laser.md\",\n\t\"./2018-07-12-IceCube-Neutrinos-Point-to-Long-sought-Cosmic-Ray-Accelerator.md\": \"./_clips/2018-07-12-IceCube-Neutrinos-Point-to-Long-sought-Cosmic-Ray-Accelerator.md\",\n\t\"./2018-08-02-Complexity-test-offers-new-perspective-on-small-quantum-computers.md\": \"./_clips/2018-08-02-Complexity-test-offers-new-perspective-on-small-quantum-computers.md\",\n\t\"./2018-08-10-Tutorial_details_nanoscale_devices_that_couple_electric_and_magnetic_fields_via_strain.md\": \"./_clips/2018-08-10-Tutorial_details_nanoscale_devices_that_couple_electric_and_magnetic_fields_via_strain.md\",\n\t\"./2018-08-28-Chaotic_recurrence_enables_a_simpler_method_for_calculating_phase_boundaries.md\": \"./_clips/2018-08-28-Chaotic_recurrence_enables_a_simpler_method_for_calculating_phase_boundaries.md\",\n\t\"./2018-09-05-Analysis_Suggests_Quantum_Simulation_as_Practical_Target_for_Early_Quantum_Computers.md\": \"./_clips/2018-09-05-Analysis_Suggests_Quantum_Simulation_as_Practical_Target_for_Early_Quantum_Computers.md\",\n\t\"./2018-09-20-Layered_metamaterial_offers_enhanced_ultrasonic_imaging.md\": \"./_clips/2018-09-20-Layered_metamaterial_offers_enhanced_ultrasonic_imaging.md\",\n\t\"./2018-09-21-QuICS_Workshop_Features_Experts_in_Quantum_Machine_Learning.md\": \"./_clips/2018-09-21-QuICS_Workshop_Features_Experts_in_Quantum_Machine_Learning.md\",\n\t\"./2018-10-08-Black_holes_The_ultimate_cosmic_whisks.md\": \"./_clips/2018-10-08-Black_holes_The_ultimate_cosmic_whisks.md\",\n\t\"./2018-10-26-Fast-flowing_electrons_may_mimic_astrophysical_dynamos.md\": \"./_clips/2018-10-26-Fast-flowing_electrons_may_mimic_astrophysical_dynamos.md\",\n\t\"./2018-11-21-Space_and_Time_Emerge_in_Research_of_New_QuICS_Hartree_Fellow.md\": \"./_clips/2018-11-21-Space_and_Time_Emerge_in_Research_of_New_QuICS_Hartree_Fellow.md\",\n\t\"./2018-11-26-Simulations_explore_the_landscape_of_electric_order_in_bismuth_ferrite_nanoislands.md\": \"./_clips/2018-11-26-Simulations_explore_the_landscape_of_electric_order_in_bismuth_ferrite_nanoislands.md\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./_clips sync recursive .md\";\n\n//# sourceURL=webpack:///./_clips_sync_.md?");

/***/ }),

/***/ "./_clips/2014-11-05-Stanford-chemical-engineers-borrow-technique-from-petrochemical-industry-to-store-solar-energy.md":
/*!*****************************************************************************************************************************!*\
  !*** ./_clips/2014-11-05-Stanford-chemical-engineers-borrow-technique-from-petrochemical-industry-to-store-solar-energy.md ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Stanford chemical engineers borrow technique from petrochemical industry to store solar energy\",\"outlet\":\"Stanford University School of Engineering\",\"date_published\":\"2014-11-05T00:00:00.000Z\",\"address\":\"http://news.stanford.edu/news/2014/november/catalyst-energy-storage-110514.html\",\"image_url\":\"/images/clips/14499-catalyst_news.jpg\",\"image_credit\":\"Jakob Kibsgaard\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Stanford chemical engineers borrow technique from petrochemical industry to store solar energy\\noutlet: Stanford University School of Engineering\\ndate_published: 2014-11-05\\naddress: http://news.stanford.edu/news/2014/november/catalyst-energy-storage-110514.html\\nimage_url: /images/clips/14499-catalyst_news.jpg\\nimage_credit: Jakob Kibsgaard\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-11-05-Stanford-chemical-engineers-borrow-technique-from-petrochemical-industry-to-store-solar-energy.md?");

/***/ }),

/***/ "./_clips/2014-11-12-Two-Stanford-engineering-professors-elected-fellows-of-the-American-Society-of-Mechanical-Engineers.md":
/*!**********************************************************************************************************************************!*\
  !*** ./_clips/2014-11-12-Two-Stanford-engineering-professors-elected-fellows-of-the-American-Society-of-Mechanical-Engineers.md ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Two Stanford engineering professors elected fellows of the American Society of Mechanical Engineers\",\"outlet\":\"Stanford University School of Engineering\",\"date_published\":\"2014-11-12T00:00:00.000Z\",\"address\":\"http://engineering.stanford.edu/news/two-stanford-engineering-professors-elected-fellows-american-society-mechanical-engineers\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Two Stanford engineering professors elected fellows of the American Society of Mechanical Engineers\\noutlet: Stanford University School of Engineering\\ndate_published: 2014-11-12\\naddress: http://engineering.stanford.edu/news/two-stanford-engineering-professors-elected-fellows-american-society-mechanical-engineers\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-11-12-Two-Stanford-engineering-professors-elected-fellows-of-the-American-Society-of-Mechanical-Engineers.md?");

/***/ }),

/***/ "./_clips/2014-11-17-A-passion-brewing.md":
/*!************************************************!*\
  !*** ./_clips/2014-11-17-A-passion-brewing.md ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"A passion brewing\",\"outlet\":\"Blogging\",\"date_published\":\"2014-11-17T00:00:00.000Z\",\"image_url\":\"/images/clips/new_mexico_sky.jpg\",\"image_credit\":\"Chris Cesare\",\"address\":\"http://outfog.com/2014/11/17/a-passion-brewing/\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: A passion brewing\\noutlet: Blogging\\ndate_published: 2014-11-17\\nimage_url: /images/clips/new_mexico_sky.jpg\\nimage_credit: Chris Cesare\\naddress: http://outfog.com/2014/11/17/a-passion-brewing/\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-11-17-A-passion-brewing.md?");

/***/ }),

/***/ "./_clips/2014-11-26-Stanford-engineers-invent-high-tech-mirror-to-beam-heat-away-from-buildings-into-space.md":
/*!*********************************************************************************************************************!*\
  !*** ./_clips/2014-11-26-Stanford-engineers-invent-high-tech-mirror-to-beam-heat-away-from-buildings-into-space.md ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Stanford engineers invent high-tech mirror to beam heat away from buildings into space\",\"outlet\":\"Stanford University School of Engineering\",\"date_published\":\"2014-11-26T00:00:00.000Z\",\"image_url\":\"/images/clips/14571-cooling_illustration.jpg\",\"image_credit\":\"Fan Lab\",\"address\":\"http://news.stanford.edu/news/2014/november/radiative-cooling-mirror-112614.html\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Stanford engineers invent high-tech mirror to beam heat away from buildings into space\\noutlet: Stanford University School of Engineering\\ndate_published: 2014-11-26\\nimage_url: /images/clips/14571-cooling_illustration.jpg\\nimage_credit: Fan Lab\\naddress: http://news.stanford.edu/news/2014/november/radiative-cooling-mirror-112614.html\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-11-26-Stanford-engineers-invent-high-tech-mirror-to-beam-heat-away-from-buildings-into-space.md?");

/***/ }),

/***/ "./_clips/2014-12-01-Without-draconian-measures-global-population-boom-is-locked-in.md":
/*!*********************************************************************************************!*\
  !*** ./_clips/2014-12-01-Without-draconian-measures-global-population-boom-is-locked-in.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Without draconian measures, global population boom is 'locked in'\",\"outlet\":\"Freelance Contributions\",\"date_published\":\"2015-12-01T00:00:00.000Z\",\"image_url\":\"/images/clips/1201.train.image_1.360.jpg\",\"image_credit\":\"Muntasirmamunimran\",\"address\":\"http://news.mongabay.com/2014/1201-cesare-ucsc-population.html\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Without draconian measures, global population boom is 'locked in'\\noutlet: Freelance Contributions\\ndate_published: 2015-12-01\\nimage_url: /images/clips/1201.train.image_1.360.jpg\\nimage_credit: Muntasirmamunimran\\naddress: http://news.mongabay.com/2014/1201-cesare-ucsc-population.html\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-01-Without-draconian-measures-global-population-boom-is-locked-in.md?");

/***/ }),

/***/ "./_clips/2014-12-02-Stanford-engineers-take-big-step-toward-using-light-instead-of-wires-inside-computers.md":
/*!********************************************************************************************************************!*\
  !*** ./_clips/2014-12-02-Stanford-engineers-take-big-step-toward-using-light-instead-of-wires-inside-computers.md ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Stanford engineers take big step toward using light instead of wires inside computers\",\"outlet\":\"Stanford University School of Engineering\",\"date_published\":\"2014-12-02T00:00:00.000Z\",\"image_url\":\"/images/clips/14595-optical_news.jpg\",\"image_credit\":\"Courtesy Vuckovic Lab\",\"address\":\"http://news.stanford.edu/news/2014/december/optical-silicon-algorithm-120214.html\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Stanford engineers take big step toward using light instead of wires inside computers\\noutlet: Stanford University School of Engineering\\ndate_published: 2014-12-02\\nimage_url: /images/clips/14595-optical_news.jpg\\nimage_credit: Courtesy Vuckovic Lab\\naddress: http://news.stanford.edu/news/2014/december/optical-silicon-algorithm-120214.html\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-02-Stanford-engineers-take-big-step-toward-using-light-instead-of-wires-inside-computers.md?");

/***/ }),

/***/ "./_clips/2014-12-05-Four-Stanford-engineering-professors-named-IEEE-fellows.md":
/*!**************************************************************************************!*\
  !*** ./_clips/2014-12-05-Four-Stanford-engineering-professors-named-IEEE-fellows.md ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Four Stanford engineering professors named IEEE fellows\",\"outlet\":\"Stanford University School of Engineering\",\"date_published\":\"2014-12-05T00:00:00.000Z\",\"address\":\"http://engineering.stanford.edu/news/four-stanford-engineering-professors-named-ieee-fellows\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Four Stanford engineering professors named IEEE fellows\\noutlet: Stanford University School of Engineering\\ndate_published: 2014-12-05\\naddress: http://engineering.stanford.edu/news/four-stanford-engineering-professors-named-ieee-fellows\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-05-Four-Stanford-engineering-professors-named-IEEE-fellows.md?");

/***/ }),

/***/ "./_clips/2014-12-08-Stanford-engineering-professor-Richard-Luthy-receives-distinguished-environmental-engineering-award.md":
/*!**********************************************************************************************************************************!*\
  !*** ./_clips/2014-12-08-Stanford-engineering-professor-Richard-Luthy-receives-distinguished-environmental-engineering-award.md ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Stanford engineering professor Richard Luthy receives distinguished environmental engineering award\",\"outlet\":\"Stanford University School of Engineering\",\"address\":\"http://engineering.stanford.edu/news/stanford-engineering-professor-richard-luthy-receives-distinguished-environmental-engineering-a\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Stanford engineering professor Richard Luthy receives distinguished environmental engineering award\\noutlet: Stanford University School of Engineering\\naddress: http://engineering.stanford.edu/news/stanford-engineering-professor-richard-luthy-receives-distinguished-environmental-engineering-a\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-08-Stanford-engineering-professor-Richard-Luthy-receives-distinguished-environmental-engineering-award.md?");

/***/ }),

/***/ "./_clips/2014-12-16-Scientists-trying-to-create-exoplanet-zoo.md":
/*!************************************************************************!*\
  !*** ./_clips/2014-12-16-Scientists-trying-to-create-exoplanet-zoo.md ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Scientists trying to create \\\"exoplanet zoo\\\"\",\"outlet\":\"Blogging\",\"date_published\":\"2014-12-16T00:00:00.000Z\",\"image_url\":\"/images/clips/Oceanplanet_lucianomendez-300x217.jpg\",\"image_credit\":\"Lucianomendez\",\"address\":\"http://blogs.agu.org/geospace/2014/12/16/scientists-trying-create-exoplanet-zoo/\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Scientists trying to create \\\"exoplanet zoo\\\"\\noutlet: Blogging\\ndate_published: 2014-12-16\\nimage_url: /images/clips/Oceanplanet_lucianomendez-300x217.jpg\\nimage_credit: Lucianomendez\\naddress: http://blogs.agu.org/geospace/2014/12/16/scientists-trying-create-exoplanet-zoo/\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-16-Scientists-trying-to-create-exoplanet-zoo.md?");

/***/ }),

/***/ "./_clips/2014-12-16-Stanford-to-host-100-year-study-on-artificial-intelligence.md":
/*!*****************************************************************************************!*\
  !*** ./_clips/2014-12-16-Stanford-to-host-100-year-study-on-artificial-intelligence.md ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Stanford to host 100-year study on artificial intelligence\",\"outlet\":\"Stanford University School of Engineering\",\"date_published\":\"2014-12-16T00:00:00.000Z\",\"image_url\":\"/images/clips/14649-aialtman_news.jpg\",\"image_credit\":\"Rod Searcey\",\"address\":\"http://news.stanford.edu/news/2014/december/ai-century-study-121614.html\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Stanford to host 100-year study on artificial intelligence\\noutlet: Stanford University School of Engineering\\ndate_published: 2014-12-16\\nimage_url: /images/clips/14649-aialtman_news.jpg\\nimage_credit: Rod Searcey\\naddress: http://news.stanford.edu/news/2014/december/ai-century-study-121614.html\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-16-Stanford-to-host-100-year-study-on-artificial-intelligence.md?");

/***/ }),

/***/ "./_clips/2014-12-17-An-updated-geological-timeline-for-the-extinction-of-the-dinosaurs.md":
/*!*************************************************************************************************!*\
  !*** ./_clips/2014-12-17-An-updated-geological-timeline-for-the-extinction-of-the-dinosaurs.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"An updated geological timeline for the extinction of the dinosaurs\",\"outlet\":\"Blogging\",\"date_published\":\"2014-12-17T00:00:00.000Z\",\"image_url\":\"/images/clips/renne_coal-300x225.jpg\",\"image_credit\":\"Courtney Sprain\",\"address\":\"http://blogs.agu.org/geospace/2014/12/17/updated-geological-timeline-extinction-dinosaurs/\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: An updated geological timeline for the extinction of the dinosaurs\\noutlet: Blogging\\ndate_published: 2014-12-17\\nimage_url: /images/clips/renne_coal-300x225.jpg\\nimage_credit: Courtney Sprain\\naddress: http://blogs.agu.org/geospace/2014/12/17/updated-geological-timeline-extinction-dinosaurs/\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-17-An-updated-geological-timeline-for-the-extinction-of-the-dinosaurs.md?");

/***/ }),

/***/ "./_clips/2014-12-17-Stanford-bioengineers-discover-knob-to-dial-up-fitter-cells.md":
/*!******************************************************************************************!*\
  !*** ./_clips/2014-12-17-Stanford-bioengineers-discover-knob-to-dial-up-fitter-cells.md ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Stanford bioengineers discover knob to dial up fitter cells\",\"outlet\":\"Stanford University School of Engineering\",\"date_published\":\"2014-12-17T00:00:00.000Z\",\"address\":\"http://engineering.stanford.edu/news/stanford-bioengineers-discover-knob-dial-fitter-cells\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Stanford bioengineers discover knob to dial up fitter cells\\noutlet: Stanford University School of Engineering\\ndate_published: 2014-12-17\\naddress: http://engineering.stanford.edu/news/stanford-bioengineers-discover-knob-dial-fitter-cells\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-17-Stanford-bioengineers-discover-knob-to-dial-up-fitter-cells.md?");

/***/ }),

/***/ "./_clips/2014-12-19-Data-from-space-illuminates-Calaveras-creep.md":
/*!**************************************************************************!*\
  !*** ./_clips/2014-12-19-Data-from-space-illuminates-Calaveras-creep.md ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Data from space illuminates Calaveras creep\",\"outlet\":\"Blogging\",\"date_published\":\"2014-12-19T00:00:00.000Z\",\"image_url\":\"/images/clips/654px-NASA_Radar_3-D_View_of_San_Andreas_Fault.jpg\",\"image_credit\":\"NASA\",\"address\":\"http://blogs.agu.org/geospace/2014/12/19/data-space-illuminates-calaveras-creep/\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Data from space illuminates Calaveras creep\\noutlet: Blogging\\ndate_published: 2014-12-19\\nimage_url: /images/clips/654px-NASA_Radar_3-D_View_of_San_Andreas_Fault.jpg\\nimage_credit: NASA\\naddress: http://blogs.agu.org/geospace/2014/12/19/data-space-illuminates-calaveras-creep/\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-19-Data-from-space-illuminates-Calaveras-creep.md?");

/***/ }),

/***/ "./_clips/2014-12-19-Stanford-computer-scientists-extend-Web-browsers-to-make-the-Internet-safer.md":
/*!**********************************************************************************************************!*\
  !*** ./_clips/2014-12-19-Stanford-computer-scientists-extend-Web-browsers-to-make-the-Internet-safer.md ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Stanford computer scientists extend Web browsers to make the Internet safer\",\"outlet\":\"Stanford University School of Engineering\",\"date_published\":\"2014-12-19T00:00:00.000Z\",\"address\":\"http://engineering.stanford.edu/news/stanford-computer-scientists-extend-web-browsers-make-internet-safer\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Stanford computer scientists extend Web browsers to make the Internet safer\\noutlet: Stanford University School of Engineering\\ndate_published: 2014-12-19\\naddress: http://engineering.stanford.edu/news/stanford-computer-scientists-extend-web-browsers-make-internet-safer\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-19-Stanford-computer-scientists-extend-Web-browsers-to-make-the-Internet-safer.md?");

/***/ }),

/***/ "./_clips/2014-12-23-Tornadoes-On-The-Sun.md":
/*!***************************************************!*\
  !*** ./_clips/2014-12-23-Tornadoes-On-The-Sun.md ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Tornados On The Sun?\",\"outlet\":\"Freelance Contributions\",\"date_published\":\"2015-03-05T00:00:00.000Z\",\"address\":\"http://svs.gsfc.nasa.gov/11691\",\"image_url\":\"/images/clips/cf-1024.jpg\",\"image_credit\":\"NASA\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Tornados On The Sun?\\noutlet: Freelance Contributions\\ndate_published: 2015-03-05\\naddress: http://svs.gsfc.nasa.gov/11691\\nimage_url: /images/clips/cf-1024.jpg\\nimage_credit: NASA\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-23-Tornadoes-On-The-Sun.md?");

/***/ }),

/***/ "./_clips/2014-12-26-Community-garden-teaches-water-saving-strategies.md":
/*!*******************************************************************************!*\
  !*** ./_clips/2014-12-26-Community-garden-teaches-water-saving-strategies.md ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Community garden teaches water-saving strategies\",\"outlet\":\"Blogging\",\"date_published\":\"2014-12-26T00:00:00.000Z\",\"image_url\":\"/images/clips/cover.jpg\",\"image_credit\":\"Chris Cesare\",\"address\":\"http://outfog.com/2014/12/26/community-garden-teaches-water-saving-strategies/\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Community garden teaches water-saving strategies\\noutlet: Blogging\\ndate_published: 2014-12-26\\nimage_url: /images/clips/cover.jpg\\nimage_credit: Chris Cesare\\naddress: http://outfog.com/2014/12/26/community-garden-teaches-water-saving-strategies/\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2014-12-26-Community-garden-teaches-water-saving-strategies.md?");

/***/ }),

/***/ "./_clips/2015-01-08-Sparing-the-Air-Campaign-comes-to-Monterey.md":
/*!*************************************************************************!*\
  !*** ./_clips/2015-01-08-Sparing-the-Air-Campaign-comes-to-Monterey.md ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Sparing the Air&#58; Campaign comes to Monterey\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-01-08T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150108/spare-the-air-campaign-comes-to-monterey\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Sparing the Air&#58; Campaign comes to Monterey\\noutlet: Monterey Herald\\ndate_published: 2015-01-08\\naddress: http://www.montereyherald.com/environment-and-nature/20150108/spare-the-air-campaign-comes-to-monterey\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-01-08-Sparing-the-Air-Campaign-comes-to-Monterey.md?");

/***/ }),

/***/ "./_clips/2015-01-12-Private-parcel-added-to-Los-Padres-National-Forest.md":
/*!*********************************************************************************!*\
  !*** ./_clips/2015-01-12-Private-parcel-added-to-Los-Padres-National-Forest.md ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Private parcel added to Los Padres National Forest\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-01-12T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150112/private-parcel-added-to-los-padres-national-forest\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Private parcel added to Los Padres National Forest\\noutlet: Monterey Herald\\ndate_published: 2015-01-12\\naddress: http://www.montereyherald.com/environment-and-nature/20150112/private-parcel-added-to-los-padres-national-forest\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-01-12-Private-parcel-added-to-Los-Padres-National-Forest.md?");

/***/ }),

/***/ "./_clips/2015-01-17-A-winters-watch-Scientists-track-whale-migration-from-Big-Sur-bluffs.md":
/*!***************************************************************************************************!*\
  !*** ./_clips/2015-01-17-A-winters-watch-Scientists-track-whale-migration-from-Big-Sur-bluffs.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"A winter's watch&#58; Scientists track whale migration from Big Sur bluffs\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-01-17T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150117/a-winters-watch-scientists-track-whale-migration-from-big-sur-bluffs\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: A winter's watch&#58; Scientists track whale migration from Big Sur bluffs\\noutlet: Monterey Herald\\ndate_published: 2015-01-17\\naddress: http://www.montereyherald.com/environment-and-nature/20150117/a-winters-watch-scientists-track-whale-migration-from-big-sur-bluffs\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-01-17-A-winters-watch-Scientists-track-whale-migration-from-Big-Sur-bluffs.md?");

/***/ }),

/***/ "./_clips/2015-01-19-MLK-Day-Seaside-speaker-urges-audience-to-break-out-of-rut.md":
/*!*****************************************************************************************!*\
  !*** ./_clips/2015-01-19-MLK-Day-Seaside-speaker-urges-audience-to-break-out-of-rut.md ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"MLK Day&#58; Seaside speaker urges audience to break out of rut\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-01-19T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/lifestyle/20150119/mlk-day-seaside-speaker-urges-audience-to-break-out-of-rut\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: MLK Day&#58; Seaside speaker urges audience to break out of rut\\noutlet: Monterey Herald\\ndate_published: 2015-01-19\\naddress: http://www.montereyherald.com/lifestyle/20150119/mlk-day-seaside-speaker-urges-audience-to-break-out-of-rut\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-01-19-MLK-Day-Seaside-speaker-urges-audience-to-break-out-of-rut.md?");

/***/ }),

/***/ "./_clips/2015-01-21-King-tides-a-peek-into-Monterey-future.md":
/*!*********************************************************************!*\
  !*** ./_clips/2015-01-21-King-tides-a-peek-into-Monterey-future.md ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"King tides a peek into Monterey future?\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-01-21T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150121/king-tides-a-peek-into-monterey-future\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: King tides a peek into Monterey future?\\noutlet: Monterey Herald\\ndate_published: 2015-01-21\\naddress: http://www.montereyherald.com/environment-and-nature/20150121/king-tides-a-peek-into-monterey-future\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-01-21-King-tides-a-peek-into-Monterey-future.md?");

/***/ }),

/***/ "./_clips/2015-01-26-Monarchs-on-the-move-Warm-weather-spurred-butterfly-activity.md":
/*!*******************************************************************************************!*\
  !*** ./_clips/2015-01-26-Monarchs-on-the-move-Warm-weather-spurred-butterfly-activity.md ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Monarchs on the move&#58; Warm weather spurred butterfly activity\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-01-26T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150126/monarchs-on-the-move-warm-weather-spurred-butterfly-activity\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Monarchs on the move&#58; Warm weather spurred butterfly activity\\noutlet: Monterey Herald\\ndate_published: 2015-01-26\\naddress: http://www.montereyherald.com/environment-and-nature/20150126/monarchs-on-the-move-warm-weather-spurred-butterfly-activity\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-01-26-Monarchs-on-the-move-Warm-weather-spurred-butterfly-activity.md?");

/***/ }),

/***/ "./_clips/2015-01-28-Climate-lobby-takes-root-in-Monterey.md":
/*!*******************************************************************!*\
  !*** ./_clips/2015-01-28-Climate-lobby-takes-root-in-Monterey.md ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Climate lobby takes root in Monterey\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-01-28T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/government-and-politics/20150128/climate-lobby-takes-root-in-monterey\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Climate lobby takes root in Monterey\\noutlet: Monterey Herald\\ndate_published: 2015-01-28\\naddress: http://www.montereyherald.com/government-and-politics/20150128/climate-lobby-takes-root-in-monterey\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-01-28-Climate-lobby-takes-root-in-Monterey.md?");

/***/ }),

/***/ "./_clips/2015-02-02-In-Carmel-a-cool-way-to-heal-minus-270-degree-air-baths.md":
/*!**************************************************************************************!*\
  !*** ./_clips/2015-02-02-In-Carmel-a-cool-way-to-heal-minus-270-degree-air-baths.md ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"In Carmel, a cool way to heal&#58; minus-270-degree air baths\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-02-02T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/business/20150202/in-carmel-a-cool-way-to-heal-minus-270-degree-air-baths\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: In Carmel, a cool way to heal&#58; minus-270-degree air baths\\noutlet: Monterey Herald\\ndate_published: 2015-02-02\\naddress: http://www.montereyherald.com/business/20150202/in-carmel-a-cool-way-to-heal-minus-270-degree-air-baths\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-02-02-In-Carmel-a-cool-way-to-heal-minus-270-degree-air-baths.md?");

/***/ }),

/***/ "./_clips/2015-02-04-Obama-seeks-$30M-for-ocean-acidification-studies.md":
/*!*******************************************************************************!*\
  !*** ./_clips/2015-02-04-Obama-seeks-$30M-for-ocean-acidification-studies.md ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Obama seeks $30M for ocean acidification studies\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-02-04T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150204/obama-seeks-30m-for-ocean-acidification-studies\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Obama seeks $30M for ocean acidification studies\\noutlet: Monterey Herald\\ndate_published: 2015-02-04\\naddress: http://www.montereyherald.com/environment-and-nature/20150204/obama-seeks-30m-for-ocean-acidification-studies\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-02-04-Obama-seeks-$30M-for-ocean-acidification-studies.md?");

/***/ }),

/***/ "./_clips/2015-02-10-Montereys-Middlebury-Institute-plunges-into-water-issues.md":
/*!***************************************************************************************!*\
  !*** ./_clips/2015-02-10-Montereys-Middlebury-Institute-plunges-into-water-issues.md ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Monterey's Middlebury Institute plunges into water issues\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-02-10T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150210/montereys-middlebury-institute-plunges-into-water-issues\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Monterey's Middlebury Institute plunges into water issues\\noutlet: Monterey Herald\\ndate_published: 2015-02-10\\naddress: http://www.montereyherald.com/environment-and-nature/20150210/montereys-middlebury-institute-plunges-into-water-issues\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-02-10-Montereys-Middlebury-Institute-plunges-into-water-issues.md?");

/***/ }),

/***/ "./_clips/2015-02-11-Monning-again-pushes-for-warning-labels-on-soda.md":
/*!******************************************************************************!*\
  !*** ./_clips/2015-02-11-Monning-again-pushes-for-warning-labels-on-soda.md ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Monning, again, pushes for warning labels on soda\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-02-11T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/health/20150211/monning-again-pushes-for-warning-labels-on-soda\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Monning, again, pushes for warning labels on soda\\noutlet: Monterey Herald\\ndate_published: 2015-02-11\\naddress: http://www.montereyherald.com/health/20150211/monning-again-pushes-for-warning-labels-on-soda\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-02-11-Monning-again-pushes-for-warning-labels-on-soda.md?");

/***/ }),

/***/ "./_clips/2015-02-14-3-D-Imaging-Techniques-Help-Surgeons-Construct-New-Faces.md":
/*!***************************************************************************************!*\
  !*** ./_clips/2015-02-14-3-D-Imaging-Techniques-Help-Surgeons-Construct-New-Faces.md ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"3-D Imaging Techniques Help Surgeons Construct New Faces\",\"outlet\":\"Freelance Contributions\",\"date_published\":\"2015-02-14T00:00:00.000Z\",\"address\":\"http://www.aaas.org/news/3-d-imaging-techniques-help-surgeons-construct-new-faces\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: 3-D Imaging Techniques Help Surgeons Construct New Faces\\noutlet: Freelance Contributions\\ndate_published: 2015-02-14\\naddress: http://www.aaas.org/news/3-d-imaging-techniques-help-surgeons-construct-new-faces\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-02-14-3-D-Imaging-Techniques-Help-Surgeons-Construct-New-Faces.md?");

/***/ }),

/***/ "./_clips/2015-02-16-CSUMB-study-backs-targeted-bottom-trawling.md":
/*!*************************************************************************!*\
  !*** ./_clips/2015-02-16-CSUMB-study-backs-targeted-bottom-trawling.md ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"CSUMB study backs targeted bottom trawling\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-02-16T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150216/csumb-study-backs-targeted-bottom-trawling\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: CSUMB study backs targeted bottom trawling\\noutlet: Monterey Herald\\ndate_published: 2015-02-16\\naddress: http://www.montereyherald.com/environment-and-nature/20150216/csumb-study-backs-targeted-bottom-trawling\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-02-16-CSUMB-study-backs-targeted-bottom-trawling.md?");

/***/ }),

/***/ "./_clips/2015-02-18-Big-Sur-condors-to-act-as-surrogates-for-Idaho-eggs.md":
/*!**********************************************************************************!*\
  !*** ./_clips/2015-02-18-Big-Sur-condors-to-act-as-surrogates-for-Idaho-eggs.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Big Sur condors to act as surrogates for Idaho eggs\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-02-18T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150218/big-sur-condors-to-act-as-surrogates-for-idaho-eggs\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Big Sur condors to act as surrogates for Idaho eggs\\noutlet: Monterey Herald\\ndate_published: 2015-02-18\\naddress: http://www.montereyherald.com/environment-and-nature/20150218/big-sur-condors-to-act-as-surrogates-for-idaho-eggs\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-02-18-Big-Sur-condors-to-act-as-surrogates-for-Idaho-eggs.md?");

/***/ }),

/***/ "./_clips/2015-02-23-Expanded-protected-area-for-orcas-to-be-studied.md":
/*!******************************************************************************!*\
  !*** ./_clips/2015-02-23-Expanded-protected-area-for-orcas-to-be-studied.md ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Expanded protected area for orcas to be studied\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-02-23T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/science/20150223/expanded-protected-area-for-orcas-to-be-studied\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Expanded protected area for orcas to be studied\\noutlet: Monterey Herald\\ndate_published: 2015-02-23\\naddress: http://www.montereyherald.com/science/20150223/expanded-protected-area-for-orcas-to-be-studied\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-02-23-Expanded-protected-area-for-orcas-to-be-studied.md?");

/***/ }),

/***/ "./_clips/2015-02-25-Monterey-Airport-runway-project-on-schedule.md":
/*!**************************************************************************!*\
  !*** ./_clips/2015-02-25-Monterey-Airport-runway-project-on-schedule.md ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Monterey Airport runway project on schedule\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-02-25T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/20150225/monterey-airport-runway-project-on-schedule\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Monterey Airport runway project on schedule\\noutlet: Monterey Herald\\ndate_published: 2015-02-25\\naddress: http://www.montereyherald.com/20150225/monterey-airport-runway-project-on-schedule\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-02-25-Monterey-Airport-runway-project-on-schedule.md?");

/***/ }),

/***/ "./_clips/2015-03-04-Carmel-teens-making-international-splash.md":
/*!***********************************************************************!*\
  !*** ./_clips/2015-03-04-Carmel-teens-making-international-splash.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Carmel teens making international splash\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-03-04T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/social-affairs/20150304/carmel-teens-making-international-splash\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Carmel teens making international splash\\noutlet: Monterey Herald\\ndate_published: 2015-03-04\\naddress: http://www.montereyherald.com/social-affairs/20150304/carmel-teens-making-international-splash\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-03-04-Carmel-teens-making-international-splash.md?");

/***/ }),

/***/ "./_clips/2015-03-05-Building-muscle-Stevenson-student-wins-national-engineering-competition.md":
/*!******************************************************************************************************!*\
  !*** ./_clips/2015-03-05-Building-muscle-Stevenson-student-wins-national-engineering-competition.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Building muscle&#58; Stevenson student wins national engineering competition\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-03-05T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/social-affairs/20150305/building-muscle-stevenson-student-wins-national-engineering-competition\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Building muscle&#58; Stevenson student wins national engineering competition\\noutlet: Monterey Herald\\ndate_published: 2015-03-05\\naddress: http://www.montereyherald.com/social-affairs/20150305/building-muscle-stevenson-student-wins-national-engineering-competition\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-03-05-Building-muscle-Stevenson-student-wins-national-engineering-competition.md?");

/***/ }),

/***/ "./_clips/2015-03-05-Underwater-robots-Aptos-High-club-seeks-to-regain-world-championship.md":
/*!***************************************************************************************************!*\
  !*** ./_clips/2015-03-05-Underwater-robots-Aptos-High-club-seeks-to-regain-world-championship.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"feature\",\"headline\":\"Underwater robots&#58; Aptos High club seeks to regain world championship\",\"outlet\":\"Freelance Contributions\",\"date_published\":\"2015-03-05T00:00:00.000Z\",\"address\":\"http://www.mercurynews.com/News/ci_27646685/Underwater-robots:-Aptos-High-club-seeks-to-regain-world-championship\",\"image_url\":\"/images/clips/20150304__SJM-WATERBOTS-03053.jpg\",\"image_credit\":\"Josie Lepe/Bay Area News Group\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: feature\\nheadline: Underwater robots&#58; Aptos High club seeks to regain world championship\\noutlet: Freelance Contributions\\ndate_published: 2015-03-05\\naddress: http://www.mercurynews.com/News/ci_27646685/Underwater-robots:-Aptos-High-club-seeks-to-regain-world-championship\\nimage_url: /images/clips/20150304__SJM-WATERBOTS-03053.jpg\\nimage_credit: Josie Lepe/Bay Area News Group\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-03-05-Underwater-robots-Aptos-High-club-seeks-to-regain-world-championship.md?");

/***/ }),

/***/ "./_clips/2015-03-09-Sardine-ban-looms-as-fishermen-weigh-disaster-funds.md":
/*!**********************************************************************************!*\
  !*** ./_clips/2015-03-09-Sardine-ban-looms-as-fishermen-weigh-disaster-funds.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Sardine ban looms as fishermen weigh disaster funds\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-03-09T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150309/sardine-ban-looms-as-fishermen-weigh-disaster-funds\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Sardine ban looms as fishermen weigh disaster funds\\noutlet: Monterey Herald\\ndate_published: 2015-03-09\\naddress: http://www.montereyherald.com/environment-and-nature/20150309/sardine-ban-looms-as-fishermen-weigh-disaster-funds\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-03-09-Sardine-ban-looms-as-fishermen-weigh-disaster-funds.md?");

/***/ }),

/***/ "./_clips/2015-03-11-Ocean-glider-helps-keep-an-eye-on-marine-life.md":
/*!****************************************************************************!*\
  !*** ./_clips/2015-03-11-Ocean-glider-helps-keep-an-eye-on-marine-life.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Ocean glider helps keep an eye on marine life\",\"outlet\":\"Monterey Herald\",\"date_published\":\"2015-03-11T00:00:00.000Z\",\"address\":\"http://www.montereyherald.com/environment-and-nature/20150311/ocean-glider-helps-keep-an-eye-on-marine-life\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Ocean glider helps keep an eye on marine life\\noutlet: Monterey Herald\\ndate_published: 2015-03-11\\naddress: http://www.montereyherald.com/environment-and-nature/20150311/ocean-glider-helps-keep-an-eye-on-marine-life\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-03-11-Ocean-glider-helps-keep-an-eye-on-marine-life.md?");

/***/ }),

/***/ "./_clips/2015-03-16-How-Does-A-Young-Brain-Read.md":
/*!**********************************************************!*\
  !*** ./_clips/2015-03-16-How-Does-A-Young-Brain-Read.md ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"How Does A Young Brain Read?\",\"outlet\":\"Blogging\",\"date_published\":\"2015-03-16T00:00:00.000Z\",\"image_url\":\"/images/clips/picturing-words-top.jpg\",\"image_credit\":\"ThomasLife via flickr | http://bit.ly/1BpVEB9\",\"address\":\"http://www.insidescience.org/blog/2015/03/16/how-does-young-brain-read\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: How Does A Young Brain Read?\\noutlet: Blogging\\ndate_published: 2015-03-16\\nimage_url: /images/clips/picturing-words-top.jpg\\nimage_credit: ThomasLife via flickr | http://bit.ly/1BpVEB9\\naddress: http://www.insidescience.org/blog/2015/03/16/how-does-young-brain-read\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-03-16-How-Does-A-Young-Brain-Read.md?");

/***/ }),

/***/ "./_clips/2015-03-16-Stanford-researchers-unravel-secrets-of-shape-shifting-bacteria.md":
/*!**********************************************************************************************!*\
  !*** ./_clips/2015-03-16-Stanford-researchers-unravel-secrets-of-shape-shifting-bacteria.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Stanford researchers unravel secrets of shape-shifting bacteria\",\"outlet\":\"Stanford University School of Engineering\",\"date_published\":\"2015-03-16T00:00:00.000Z\",\"address\":\"http://news.stanford.edu/news/2015/march/lform-shape-shift-031615.html\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Stanford researchers unravel secrets of shape-shifting bacteria\\noutlet: Stanford University School of Engineering\\ndate_published: 2015-03-16\\naddress: http://news.stanford.edu/news/2015/march/lform-shape-shift-031615.html\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-03-16-Stanford-researchers-unravel-secrets-of-shape-shifting-bacteria.md?");

/***/ }),

/***/ "./_clips/2015-04-10-Vampire-bats-have-a-taste-for-bacon.md":
/*!******************************************************************!*\
  !*** ./_clips/2015-04-10-Vampire-bats-have-a-taste-for-bacon.md ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Vampire bats have a taste for bacon\",\"outlet\":\"Science\",\"date_published\":\"2015-04-10T00:00:00.000Z\",\"image_url\":\"/images/clips/sn-vampirebatsH.jpg\",\"image_credit\":\"SANDSTEIN/CREATIVE COMMONS\",\"address\":\"http://news.sciencemag.org/biology/2015/04/vampire-bats-have-taste-bacon\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Vampire bats have a taste for bacon\\noutlet: Science\\ndate_published: 2015-04-10\\nimage_url: /images/clips/sn-vampirebatsH.jpg\\nimage_credit: SANDSTEIN/CREATIVE COMMONS\\naddress: http://news.sciencemag.org/biology/2015/04/vampire-bats-have-taste-bacon\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-04-10-Vampire-bats-have-a-taste-for-bacon.md?");

/***/ }),

/***/ "./_clips/2015-04-10-Why-ants-dont-get-into-traffic-jams.md":
/*!******************************************************************!*\
  !*** ./_clips/2015-04-10-Why-ants-dont-get-into-traffic-jams.md ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Why ants don't get into traffic jams\",\"outlet\":\"Science\",\"date_published\":\"2015-04-10T00:00:00.000Z\",\"image_url\":\"/images/clips/sn-antsH_1.jpg\",\"image_credit\":\"ROMAN BOROVSKY/WIKIMEDIA/CREATIVE COMMONS\",\"address\":\"http://news.sciencemag.org/plants-animals/2015/04/why-ants-don-t-get-traffic-jams\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Why ants don't get into traffic jams\\noutlet: Science\\ndate_published: 2015-04-10\\nimage_url: /images/clips/sn-antsH_1.jpg\\nimage_credit: ROMAN BOROVSKY/WIKIMEDIA/CREATIVE COMMONS\\naddress: http://news.sciencemag.org/plants-animals/2015/04/why-ants-don-t-get-traffic-jams\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-04-10-Why-ants-dont-get-into-traffic-jams.md?");

/***/ }),

/***/ "./_clips/2015-04-13-How-sea-snails-learned-to-gobble-fish.md":
/*!********************************************************************!*\
  !*** ./_clips/2015-04-13-How-sea-snails-learned-to-gobble-fish.md ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"How sea snails learned to gobble fish\",\"outlet\":\"Science\",\"date_published\":\"2015-04-13T00:00:00.000Z\",\"image_url\":\"/images/clips/pf_snail.jpg\",\"image_credit\":\"ALEX KERSTITCH/VISUALS UNLIMITED/CORBIS\",\"address\":\"http://news.sciencemag.org/evolution/2015/04/how-sea-snails-learned-gobble-fish\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: How sea snails learned to gobble fish\\noutlet: Science\\ndate_published: 2015-04-13\\nimage_url: /images/clips/pf_snail.jpg\\nimage_credit: ALEX KERSTITCH/VISUALS UNLIMITED/CORBIS\\naddress: http://news.sciencemag.org/evolution/2015/04/how-sea-snails-learned-gobble-fish\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-04-13-How-sea-snails-learned-to-gobble-fish.md?");

/***/ }),

/***/ "./_clips/2015-04-17-Colors-help-set-bodys-internal-clock.md":
/*!*******************************************************************!*\
  !*** ./_clips/2015-04-17-Colors-help-set-bodys-internal-clock.md ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Colors help set body's internal clock\",\"outlet\":\"Science\",\"date_published\":\"2015-04-17T00:00:00.000Z\",\"image_url\":\"/images/clips/sn-timecolors.jpg\",\"image_credit\":\"MAFRMCFCA/ISTOCKPHOTO\",\"address\":\"http://news.sciencemag.org/biology/2015/04/colors-help-set-body-s-internal-clock\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Colors help set body's internal clock\\noutlet: Science\\ndate_published: 2015-04-17\\nimage_url: /images/clips/sn-timecolors.jpg\\nimage_credit: MAFRMCFCA/ISTOCKPHOTO\\naddress: http://news.sciencemag.org/biology/2015/04/colors-help-set-body-s-internal-clock\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-04-17-Colors-help-set-bodys-internal-clock.md?");

/***/ }),

/***/ "./_clips/2015-05-05-What-your-smile-says-about-where-youre-from.md":
/*!**************************************************************************!*\
  !*** ./_clips/2015-05-05-What-your-smile-says-about-where-youre-from.md ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"What your smile says about where you're from\",\"outlet\":\"Science\",\"date_published\":\"2015-05-05T00:00:00.000Z\",\"image_url\":\"/images/clips/sn-smiles.jpg\",\"image_credit\":\"MAFRMCFCA/ISTOCKPHOTO\",\"address\":\"http://news.sciencemag.org/social-sciences/2015/05/what-your-smile-says-about-where-you-re\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: What your smile says about where you're from\\noutlet: Science\\ndate_published: 2015-05-05\\nimage_url: /images/clips/sn-smiles.jpg\\nimage_credit: MAFRMCFCA/ISTOCKPHOTO\\naddress: http://news.sciencemag.org/social-sciences/2015/05/what-your-smile-says-about-where-you-re\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-05-05-What-your-smile-says-about-where-youre-from.md?");

/***/ }),

/***/ "./_clips/2015-05-08-Bats-open-wide-to-focus-their-ultrasonic-beams.md":
/*!*****************************************************************************!*\
  !*** ./_clips/2015-05-08-Bats-open-wide-to-focus-their-ultrasonic-beams.md ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Bats open wide to focus their ultrasonic beams\",\"outlet\":\"Science\",\"date_published\":\"2015-05-08T00:00:00.000Z\",\"image_url\":\"/images/clips/sn-echolation.jpg\",\"image_credit\":\"Jens Rydell\",\"address\":\"http://news.sciencemag.org/plants-animals/2015/05/bats-open-wide-focus-their-ultrasonic-beams\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Bats open wide to focus their ultrasonic beams\\noutlet: Science\\ndate_published: 2015-05-08\\nimage_url: /images/clips/sn-echolation.jpg\\nimage_credit: Jens Rydell\\naddress: http://news.sciencemag.org/plants-animals/2015/05/bats-open-wide-focus-their-ultrasonic-beams\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-05-08-Bats-open-wide-to-focus-their-ultrasonic-beams.md?");

/***/ }),

/***/ "./_clips/2015-05-11-Many-twin-stars-may-actually-be-triplets.md":
/*!***********************************************************************!*\
  !*** ./_clips/2015-05-11-Many-twin-stars-may-actually-be-triplets.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Many twin stars may actually be triplets\",\"outlet\":\"Science\",\"date_published\":\"2015-05-11T00:00:00.000Z\",\"image_url\":\"/images/clips/sn-starsystems.jpg\",\"image_credit\":\"ESO/L. CALACADA\",\"address\":\"http://news.sciencemag.org/space/2015/05/many-twin-stars-may-actually-be-triplets\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Many twin stars may actually be triplets\\noutlet: Science\\ndate_published: 2015-05-11\\nimage_url: /images/clips/sn-starsystems.jpg\\nimage_credit: ESO/L. CALACADA\\naddress: http://news.sciencemag.org/space/2015/05/many-twin-stars-may-actually-be-triplets\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-05-11-Many-twin-stars-may-actually-be-triplets.md?");

/***/ }),

/***/ "./_clips/2015-05-29-Rock-paper-scissors-may-explain-evolutionary-games-in-nature.md":
/*!*******************************************************************************************!*\
  !*** ./_clips/2015-05-29-Rock-paper-scissors-may-explain-evolutionary-games-in-nature.md ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Rock-paper-scissors may explain evolutionary 'games' in nature\",\"outlet\":\"Science\",\"date_published\":\"2015-05-29T00:00:00.000Z\",\"image_url\":\"/images/clips/sn-rockpaper.jpg\",\"image_credit\":\"YIAP SEE FAT/HEMERA/THINKSTOCK\",\"address\":\"http://news.sciencemag.org/biology/2015/05/rock-paper-scissors-may-explain-evolutionary-games-nature\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Rock-paper-scissors may explain evolutionary 'games' in nature\\noutlet: Science\\ndate_published: 2015-05-29\\nimage_url: /images/clips/sn-rockpaper.jpg\\nimage_credit: YIAP SEE FAT/HEMERA/THINKSTOCK\\naddress: http://news.sciencemag.org/biology/2015/05/rock-paper-scissors-may-explain-evolutionary-games-nature\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-05-29-Rock-paper-scissors-may-explain-evolutionary-games-in-nature.md?");

/***/ }),

/***/ "./_clips/2015-06-17-Deep-sea-sharks-show-surprising-buoyancy.md":
/*!***********************************************************************!*\
  !*** ./_clips/2015-06-17-Deep-sea-sharks-show-surprising-buoyancy.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Deep-sea sharks show surprising buoyancy\",\"outlet\":\"Science\",\"date_published\":\"2015-06-17T00:00:00.000Z\",\"image_url\":\"/images/clips/sm-shark.jpg\",\"image_credit\":\"MARK ROYER/UNIVERSITY OF HAWAII\",\"address\":\"http://news.sciencemag.org/physics/2015/06/deep-sea-sharks-show-surprising-buoyancy\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Deep-sea sharks show surprising buoyancy\\noutlet: Science\\ndate_published: 2015-06-17\\nimage_url: /images/clips/sm-shark.jpg\\nimage_credit: MARK ROYER/UNIVERSITY OF HAWAII\\naddress: http://news.sciencemag.org/physics/2015/06/deep-sea-sharks-show-surprising-buoyancy\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-06-17-Deep-sea-sharks-show-surprising-buoyancy.md?");

/***/ }),

/***/ "./_clips/2015-06-22-Aptos-High-Robotics.md":
/*!**************************************************!*\
  !*** ./_clips/2015-06-22-Aptos-High-Robotics.md ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"video\",\"headline\":\"Aptos High Robotics\",\"outlet\":\"Freelance Contributions\",\"date_published\":\"2015-06-22T00:00:00.000Z\",\"address\":\"https://vimeo.com/131390904\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: video\\nheadline: Aptos High Robotics\\noutlet: Freelance Contributions\\ndate_published: 2015-06-22\\naddress: https://vimeo.com/131390904\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-06-22-Aptos-High-Robotics.md?");

/***/ }),

/***/ "./_clips/2015-07-10-Energetic-bacteria-form-frictionless-superfluids.md":
/*!*******************************************************************************!*\
  !*** ./_clips/2015-07-10-Energetic-bacteria-form-frictionless-superfluids.md ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Energetic bacteria form frictionless superfluids\",\"outlet\":\"Nature\",\"date_published\":\"2015-07-10T00:00:00.000Z\",\"image_url\":\"/images/clips/1.17957.jpg\",\"image_credit\":\"Visuals Unlimited/Corbis\",\"address\":\"http://www.nature.com/news/energetic-bacteria-form-frictionless-superfluids-1.17957\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Energetic bacteria form frictionless superfluids\\noutlet: Nature\\ndate_published: 2015-07-10\\nimage_url: /images/clips/1.17957.jpg\\nimage_credit: Visuals Unlimited/Corbis\\naddress: http://www.nature.com/news/energetic-bacteria-form-frictionless-superfluids-1.17957\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-07-10-Energetic-bacteria-form-frictionless-superfluids.md?");

/***/ }),

/***/ "./_clips/2015-07-16-Polar-bear-metabolism-cannot-cope-with-ice-loss.md":
/*!******************************************************************************!*\
  !*** ./_clips/2015-07-16-Polar-bear-metabolism-cannot-cope-with-ice-loss.md ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Polar bear metabolism cannot cope with ice loss\",\"outlet\":\"Nature\",\"date_published\":\"2015-07-16T00:00:00.000Z\",\"image_url\":\"/images/clips/web1.17992_NPL-01507282.jpg\",\"image_credit\":\"Ole Jorgen Liodden/naturepl.com\",\"address\":\"http://www.nature.com/news/polar-bear-metabolism-cannot-cope-with-ice-loss-1.17992\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Polar bear metabolism cannot cope with ice loss\\noutlet: Nature\\ndate_published: 2015-07-16\\nimage_url: /images/clips/web1.17992_NPL-01507282.jpg\\nimage_credit: Ole Jorgen Liodden/naturepl.com\\naddress: http://www.nature.com/news/polar-bear-metabolism-cannot-cope-with-ice-loss-1.17992\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-07-16-Polar-bear-metabolism-cannot-cope-with-ice-loss.md?");

/***/ }),

/***/ "./_clips/2015-07-16-Spain-and-Chile-chosen-to-host-gamma-ray-telescope.md":
/*!*********************************************************************************!*\
  !*** ./_clips/2015-07-16-Spain-and-Chile-chosen-to-host-gamma-ray-telescope.md ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Spain and Chile chosen to host gamma-ray telescope\",\"outlet\":\"Nature\",\"date_published\":\"2015-07-16T00:00:00.000Z\",\"image_url\":\"/images/clips/1.18008_CTA_array.jpg\",\"image_credit\":\"DESY/Milde Science Comm./Exozet\",\"address\":\"http://www.nature.com/news/spain-and-chile-chosen-to-host-%CE%B3-ray-telescope-1.18008\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Spain and Chile chosen to host gamma-ray telescope\\noutlet: Nature\\ndate_published: 2015-07-16\\nimage_url: /images/clips/1.18008_CTA_array.jpg\\nimage_credit: DESY/Milde Science Comm./Exozet\\naddress: http://www.nature.com/news/spain-and-chile-chosen-to-host-%CE%B3-ray-telescope-1.18008\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-07-16-Spain-and-Chile-chosen-to-host-gamma-ray-telescope.md?");

/***/ }),

/***/ "./_clips/2015-07-20-Shoddy-strut-likely-culprit-in-SpaceX-rocket-wreck.md":
/*!*********************************************************************************!*\
  !*** ./_clips/2015-07-20-Shoddy-strut-likely-culprit-in-SpaceX-rocket-wreck.md ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Shoddy strut likely culprit in SpaceX rocket wreck\",\"outlet\":\"Nature\",\"date_published\":\"2015-07-20T00:00:00.000Z\",\"image_url\":\"/images/clips/1.18026.jpg\",\"image_credit\":\"John Raoux/AP\",\"address\":\"http://www.nature.com/news/shoddy-strut-likely-culprit-in-spacex-rocket-wreck-1.18026\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Shoddy strut likely culprit in SpaceX rocket wreck\\noutlet: Nature\\ndate_published: 2015-07-20\\nimage_url: /images/clips/1.18026.jpg\\nimage_credit: John Raoux/AP\\naddress: http://www.nature.com/news/shoddy-strut-likely-culprit-in-spacex-rocket-wreck-1.18026\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-07-20-Shoddy-strut-likely-culprit-in-SpaceX-rocket-wreck.md?");

/***/ }),

/***/ "./_clips/2015-07-28-Budget-showdown-leaves-US-science-agencies-in-limbo.md":
/*!**********************************************************************************!*\
  !*** ./_clips/2015-07-28-Budget-showdown-leaves-US-science-agencies-in-limbo.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Budget showdown leaves US science agencies in limbo\",\"outlet\":\"Nature\",\"date_published\":\"2015-07-28T00:00:00.000Z\",\"image_url\":\"/images/clips/funding.jpg\",\"address\":\"http://www.nature.com/news/budget-showdown-leaves-us-science-agencies-in-limbo-1.18087\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Budget showdown leaves US science agencies in limbo\\noutlet: Nature\\ndate_published: 2015-07-28\\nimage_url: /images/clips/funding.jpg\\naddress: http://www.nature.com/news/budget-showdown-leaves-us-science-agencies-in-limbo-1.18087\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-07-28-Budget-showdown-leaves-US-science-agencies-in-limbo.md?");

/***/ }),

/***/ "./_clips/2015-07-28-Historic-human-burials-identified.md":
/*!****************************************************************!*\
  !*** ./_clips/2015-07-28-Historic-human-burials-identified.md ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Historic human burials identified\",\"outlet\":\"Nature\",\"date_published\":\"2015-07-28T00:00:00.000Z\",\"image_url\":\"/images/clips/IMG_5151_Archer_1.18079.jpg\",\"image_credit\":\"Chris Maddaloni/Nature\",\"address\":\"http://www.nature.com/news/historic-human-burials-identified-1.18079\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Historic human burials identified\\noutlet: Nature\\ndate_published: 2015-07-28\\nimage_url: /images/clips/IMG_5151_Archer_1.18079.jpg\\nimage_credit: Chris Maddaloni/Nature\\naddress: http://www.nature.com/news/historic-human-burials-identified-1.18079\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-07-28-Historic-human-burials-identified.md?");

/***/ }),

/***/ "./_clips/2015-08-03-Physicists-announce-graphenes-latest-cousin-stanene.md":
/*!**********************************************************************************!*\
  !*** ./_clips/2015-08-03-Physicists-announce-graphenes-latest-cousin-stanene.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Physicists announce graphene's latest cousin&#58; stanene\",\"outlet\":\"Nature\",\"date_published\":\"2015-08-03T00:00:00.000Z\",\"image_url\":\"/images/clips/fig1i_4a_comp.jpg\",\"address\":\"http://www.nature.com/news/physicists-announce-graphene-s-latest-cousin-stanene-1.18113\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Physicists announce graphene's latest cousin&#58; stanene\\noutlet: Nature\\ndate_published: 2015-08-03\\nimage_url: /images/clips/fig1i_4a_comp.jpg\\naddress: http://www.nature.com/news/physicists-announce-graphene-s-latest-cousin-stanene-1.18113\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-08-03-Physicists-announce-graphenes-latest-cousin-stanene.md?");

/***/ }),

/***/ "./_clips/2015-08-04-Heard-it-from-a-bird.md":
/*!***************************************************!*\
  !*** ./_clips/2015-08-04-Heard-it-from-a-bird.md ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"feature\",\"headline\":\"Heard it from a Bird\",\"outlet\":\"Freelance Contributions\",\"date_published\":\"2015-08-04T00:00:00.000Z\",\"image_url\":\"/images/clips/finches-1.jpg\",\"image_credit\":\"Melissa Logies\",\"address\":\"http://sciencenotes.ucsc.edu/2015/pages/finches/finches.html\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: feature\\nheadline: Heard it from a Bird\\noutlet: Freelance Contributions\\ndate_published: 2015-08-04\\nimage_url: /images/clips/finches-1.jpg\\nimage_credit: Melissa Logies\\naddress: http://sciencenotes.ucsc.edu/2015/pages/finches/finches.html\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-08-04-Heard-it-from-a-bird.md?");

/***/ }),

/***/ "./_clips/2015-08-04-What-are-finches-saying-to-each-other.md":
/*!********************************************************************!*\
  !*** ./_clips/2015-08-04-What-are-finches-saying-to-each-other.md ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"podcast\",\"headline\":\"What are finches saying to each other?\",\"outlet\":\"Freelance Contributions\",\"date_published\":\"2015-08-04T00:00:00.000Z\",\"address\":\"https://soundcloud.com/scicom-slugs/what-are-finches-saying-to\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: podcast\\nheadline: What are finches saying to each other?\\noutlet: Freelance Contributions\\ndate_published: 2015-08-04\\naddress: https://soundcloud.com/scicom-slugs/what-are-finches-saying-to\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-08-04-What-are-finches-saying-to-each-other.md?");

/***/ }),

/***/ "./_clips/2015-08-14-Developing-El-Nino-could-be-strongest-on-record.md":
/*!******************************************************************************!*\
  !*** ./_clips/2015-08-14-Developing-El-Nino-could-be-strongest-on-record.md ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Developing El Nino could be strongest on record\",\"outlet\":\"Nature\",\"date_published\":\"2015-08-14T00:00:00.000Z\",\"image_url\":\"/images/clips/latest_sst.gif\",\"image_credit\":\"NOAA\",\"address\":\"http://www.nature.com/news/developing-el-ni%C3%B1o-could-be-strongest-on-record-1.18184\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Developing El Nino could be strongest on record\\noutlet: Nature\\ndate_published: 2015-08-14\\nimage_url: /images/clips/latest_sst.gif\\nimage_credit: NOAA\\naddress: http://www.nature.com/news/developing-el-ni%C3%B1o-could-be-strongest-on-record-1.18184\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-08-14-Developing-El-Nino-could-be-strongest-on-record.md?");

/***/ }),

/***/ "./_clips/2015-09-08-Online-security-braces-for-quantum-revolution.md":
/*!****************************************************************************!*\
  !*** ./_clips/2015-09-08-Online-security-braces-for-quantum-revolution.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Online security braces for quantum revolution\",\"outlet\":\"Nature\",\"date_published\":\"2015-09-08T00:00:00.000Z\",\"image_url\":\"/images/clips/for_20web_20GettyImages-564086461.jpg\",\"image_credit\":\"Carol Highsmith/Buyenlarge/Getty\",\"address\":\"http://www.nature.com/news/online-security-braces-for-quantum-revolution-1.18332\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Online security braces for quantum revolution\\noutlet: Nature\\ndate_published: 2015-09-08\\nimage_url: /images/clips/for_20web_20GettyImages-564086461.jpg\\nimage_credit: Carol Highsmith/Buyenlarge/Getty\\naddress: http://www.nature.com/news/online-security-braces-for-quantum-revolution-1.18332\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-09-08-Online-security-braces-for-quantum-revolution.md?");

/***/ }),

/***/ "./_clips/2015-09-14-California-snowpack-lowest-in-past-500-years.md":
/*!***************************************************************************!*\
  !*** ./_clips/2015-09-14-California-snowpack-lowest-in-past-500-years.md ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"California snowpack lowest in past 500 years\",\"outlet\":\"Nature\",\"date_published\":\"2015-09-14T00:00:00.000Z\",\"image_url\":\"/images/clips/1.18345_900px.jpg\",\"image_credit\":\"Max Whittaker/Getty Images\",\"address\":\"http://www.nature.com/news/california-snowpack-lowest-in-past-500-years-1.18345\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: California snowpack lowest in past 500 years\\noutlet: Nature\\ndate_published: 2015-09-14\\nimage_url: /images/clips/1.18345_900px.jpg\\nimage_credit: Max Whittaker/Getty Images\\naddress: http://www.nature.com/news/california-snowpack-lowest-in-past-500-years-1.18345\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-09-14-California-snowpack-lowest-in-past-500-years.md?");

/***/ }),

/***/ "./_clips/2015-09-24-Nobel-speculation-kicks-into-high-gear.md":
/*!*********************************************************************!*\
  !*** ./_clips/2015-09-24-Nobel-speculation-kicks-into-high-gear.md ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Nobel speculation kicks into high gear\",\"outlet\":\"Nature\",\"date_published\":\"2015-09-24T00:00:00.000Z\",\"image_url\":\"/images/clips/1.18429.jpg\",\"image_credit\":\"Jonathan Nackstrand/AFP/Getty Images\",\"address\":\"http://www.nature.com/news/nobel-speculation-kicks-into-high-gear-1.18429\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Nobel speculation kicks into high gear\\noutlet: Nature\\ndate_published: 2015-09-24\\nimage_url: /images/clips/1.18429.jpg\\nimage_credit: Jonathan Nackstrand/AFP/Getty Images\\naddress: http://www.nature.com/news/nobel-speculation-kicks-into-high-gear-1.18429\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-09-24-Nobel-speculation-kicks-into-high-gear.md?");

/***/ }),

/***/ "./_clips/2015-09-25-Maths-whizz-solves-a-masters-riddle.md":
/*!******************************************************************!*\
  !*** ./_clips/2015-09-25-Maths-whizz-solves-a-masters-riddle.md ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Maths whizz solves a master's riddle\",\"outlet\":\"Nature\",\"date_published\":\"2015-09-25T00:00:00.000Z\",\"image_url\":\"/images/clips/GettyImages-564056561web.jpg\",\"image_credit\":\"Richard Hartog/Los Angeles Times/Getty\",\"address\":\"http://www.nature.com/news/maths-whiz-solves-a-master-s-riddle-1.18441\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Maths whizz solves a master's riddle\\noutlet: Nature\\ndate_published: 2015-09-25\\nimage_url: /images/clips/GettyImages-564056561web.jpg\\nimage_credit: Richard Hartog/Los Angeles Times/Getty\\naddress: http://www.nature.com/news/maths-whiz-solves-a-master-s-riddle-1.18441\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-09-25-Maths-whizz-solves-a-masters-riddle.md?");

/***/ }),

/***/ "./_clips/2015-09-30-US-budget-deal-averts-government-shutdown.md":
/*!************************************************************************!*\
  !*** ./_clips/2015-09-30-US-budget-deal-averts-government-shutdown.md ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"US budget deal averts government shutdown\",\"outlet\":\"Nature\",\"date_published\":\"2015-09-30T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/us-budget-deal-averts-government-shutdown-1.18481\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: US budget deal averts government shutdown\\noutlet: Nature\\ndate_published: 2015-09-30\\naddress: http://www.nature.com/news/us-budget-deal-averts-government-shutdown-1.18481\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-09-30-US-budget-deal-averts-government-shutdown.md?");

/***/ }),

/***/ "./_clips/2015-10-07-From-speculation-to-surprise-science-Twittersphere-reacts-to-Nobel-prizewinners.md":
/*!**************************************************************************************************************!*\
  !*** ./_clips/2015-10-07-From-speculation-to-surprise-science-Twittersphere-reacts-to-Nobel-prizewinners.md ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"From speculation to surprise, science Twittersphere reacts to Nobel prizewinners\",\"outlet\":\"Nature\",\"date_published\":\"2015-10-07T00:00:00.000Z\",\"image_url\":\"/images/clips/WEB_Nobel_Naturemag_socialselection_getty491637640.jpg\",\"image_credit\":\"Jonathan Nackstrand/AFP/Getty Images\",\"address\":\"http://www.nature.com/news/from-speculation-to-surprise-science-twittersphere-reacts-to-nobel-prizewinners-1.18526\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: From speculation to surprise, science Twittersphere reacts to Nobel prizewinners\\noutlet: Nature\\ndate_published: 2015-10-07\\nimage_url: /images/clips/WEB_Nobel_Naturemag_socialselection_getty491637640.jpg\\nimage_credit: Jonathan Nackstrand/AFP/Getty Images\\naddress: http://www.nature.com/news/from-speculation-to-surprise-science-twittersphere-reacts-to-nobel-prizewinners-1.18526\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-10-07-From-speculation-to-surprise-science-Twittersphere-reacts-to-Nobel-prizewinners.md?");

/***/ }),

/***/ "./_clips/2015-10-13-Zero-gravity-genomics-passes-first-test.md":
/*!**********************************************************************!*\
  !*** ./_clips/2015-10-13-Zero-gravity-genomics-passes-first-test.md ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Zero-gravity genomics passes first test\",\"outlet\":\"Nature\",\"date_published\":\"2015-10-13T00:00:00.000Z\",\"image_url\":\"/images/clips/zero-gravity-genomics_Naturejournal_science_resear.jpg\",\"image_credit\":\"NASA/Regan Geeseman\",\"address\":\"http://www.nature.com/news/zero-gravity-genomics-passes-first-test-1.18537\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Zero-gravity genomics passes first test\\noutlet: Nature\\ndate_published: 2015-10-13\\nimage_url: /images/clips/zero-gravity-genomics_Naturejournal_science_resear.jpg\\nimage_credit: NASA/Regan Geeseman\\naddress: http://www.nature.com/news/zero-gravity-genomics-passes-first-test-1.18537\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-10-13-Zero-gravity-genomics-passes-first-test.md?");

/***/ }),

/***/ "./_clips/2015-10-23-US-astronomers-stuck-in-grant-rejection-cycle.md":
/*!****************************************************************************!*\
  !*** ./_clips/2015-10-23-US-astronomers-stuck-in-grant-rejection-cycle.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"US astronomers stuck in grant-rejection cycle\",\"outlet\":\"Nature\",\"date_published\":\"2015-10-23T00:00:00.000Z\",\"image_url\":\"/images/clips/1.18631.jpg\",\"image_credit\":\"Jiuguang Wang/CC BY 2.0\",\"address\":\"http://www.nature.com/news/us-astronomers-stuck-in-grant-rejection-cycle-1.18631\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: US astronomers stuck in grant-rejection cycle\\noutlet: Nature\\ndate_published: 2015-10-23\\nimage_url: /images/clips/1.18631.jpg\\nimage_credit: Jiuguang Wang/CC BY 2.0\\naddress: http://www.nature.com/news/us-astronomers-stuck-in-grant-rejection-cycle-1.18631\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-10-23-US-astronomers-stuck-in-grant-rejection-cycle.md?");

/***/ }),

/***/ "./_clips/2015-10-28-Rosetta-sniffs-oxygen-around-comet-67P.md":
/*!*********************************************************************!*\
  !*** ./_clips/2015-10-28-Rosetta-sniffs-oxygen-around-comet-67P.md ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Rosetta sniffs oxygen around comet 67P\",\"outlet\":\"Nature\",\"date_published\":\"2015-10-28T00:00:00.000Z\",\"image_url\":\"/images/clips/1.18658.jpg\",\"image_credit\":\"ESA/Rosetta/NavCam - CC BY-SA IGO 3.0\",\"address\":\"http://www.nature.com/news/rosetta-sniffs-oxygen-around-comet-67p-1.18658\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Rosetta sniffs oxygen around comet 67P\\noutlet: Nature\\ndate_published: 2015-10-28\\nimage_url: /images/clips/1.18658.jpg\\nimage_credit: ESA/Rosetta/NavCam - CC BY-SA IGO 3.0\\naddress: http://www.nature.com/news/rosetta-sniffs-oxygen-around-comet-67p-1.18658\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-10-28-Rosetta-sniffs-oxygen-around-comet-67P.md?");

/***/ }),

/***/ "./_clips/2015-10-28-US-budget-deal-could-ease-uncertainty-over-science-spending.md":
/*!******************************************************************************************!*\
  !*** ./_clips/2015-10-28-US-budget-deal-could-ease-uncertainty-over-science-spending.md ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"US budget deal could ease uncertainty over science spending\",\"outlet\":\"Nature\",\"date_published\":\"2015-10-28T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/us-budget-deal-could-ease-uncertainty-over-science-spending-1.18677\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: US budget deal could ease uncertainty over science spending\\noutlet: Nature\\ndate_published: 2015-10-28\\naddress: http://www.nature.com/news/us-budget-deal-could-ease-uncertainty-over-science-spending-1.18677\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-10-28-US-budget-deal-could-ease-uncertainty-over-science-spending.md?");

/***/ }),

/***/ "./_clips/2015-11-06-Light-and-heat-propel-bendy-graphene-crawlers.md":
/*!****************************************************************************!*\
  !*** ./_clips/2015-11-06-Light-and-heat-propel-bendy-graphene-crawlers.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Light and heat propel bendy graphene crawlers\",\"outlet\":\"Nature\",\"date_published\":\"2015-11-06T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/light-and-heat-propel-bendy-graphene-crawlers-1.18742\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Light and heat propel bendy graphene crawlers\\noutlet: Nature\\ndate_published: 2015-11-06\\naddress: http://www.nature.com/news/light-and-heat-propel-bendy-graphene-crawlers-1.18742\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-11-06-Light-and-heat-propel-bendy-graphene-crawlers.md?");

/***/ }),

/***/ "./_clips/2015-11-12-Volcanic-rock-hints-at-source-of-Earths-water.md":
/*!****************************************************************************!*\
  !*** ./_clips/2015-11-12-Volcanic-rock-hints-at-source-of-Earths-water.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Volcanic rock hints at source of Earth's water\",\"outlet\":\"Nature\",\"date_published\":\"2015-11-12T00:00:00.000Z\",\"image_url\":\"/images/clips/1.18779_20.jpg\",\"image_credit\":\"Arctic-Images/Corbis\",\"address\":\"http://www.nature.com/news/volcanic-rock-hints-at-source-of-earth-s-water-1.18779\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Volcanic rock hints at source of Earth's water\\noutlet: Nature\\ndate_published: 2015-11-12\\nimage_url: /images/clips/1.18779_20.jpg\\nimage_credit: Arctic-Images/Corbis\\naddress: http://www.nature.com/news/volcanic-rock-hints-at-source-of-earth-s-water-1.18779\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-11-12-Volcanic-rock-hints-at-source-of-Earths-water.md?");

/***/ }),

/***/ "./_clips/2015-11-18-Cultural-differences-determine-when-kids-learn-to-play-fair.md":
/*!******************************************************************************************!*\
  !*** ./_clips/2015-11-18-Cultural-differences-determine-when-kids-learn-to-play-fair.md ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Cultural differences determine when kids learn to play fair\",\"outlet\":\"Nature\",\"date_published\":\"2015-11-18T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/cultural-differences-determine-when-kids-learn-to-play-fair-1.18816\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Cultural differences determine when kids learn to play fair\\noutlet: Nature\\ndate_published: 2015-11-18\\naddress: http://www.nature.com/news/cultural-differences-determine-when-kids-learn-to-play-fair-1.18816\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-11-18-Cultural-differences-determine-when-kids-learn-to-play-fair.md?");

/***/ }),

/***/ "./_clips/2015-11-19-Graph-theory-breakthrough-tantalizes-mathematicians.md":
/*!**********************************************************************************!*\
  !*** ./_clips/2015-11-19-Graph-theory-breakthrough-tantalizes-mathematicians.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Graph-theory breakthrough tantalizes mathematicians\",\"outlet\":\"Nature\",\"date_published\":\"2015-11-19T00:00:00.000Z\",\"image_url\":\"/images/clips/nature-graph-isomorphism.png\",\"image_credit\":\"Nature\",\"address\":\"http://www.nature.com/news/graph-theory-breakthrough-tantalizes-mathematicians-1.18801\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Graph-theory breakthrough tantalizes mathematicians\\noutlet: Nature\\ndate_published: 2015-11-19\\nimage_url: /images/clips/nature-graph-isomorphism.png\\nimage_credit: Nature\\naddress: http://www.nature.com/news/graph-theory-breakthrough-tantalizes-mathematicians-1.18801\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-11-19-Graph-theory-breakthrough-tantalizes-mathematicians.md?");

/***/ }),

/***/ "./_clips/2015-12-03-What-were-reading-day-4.md":
/*!******************************************************!*\
  !*** ./_clips/2015-12-03-What-were-reading-day-4.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Paris Climate Talks&#58; What we're reading, day 4\",\"outlet\":\"Nature\",\"date_published\":\"2015-12-03T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/paris-climate-talks-day-4-what-we-re-reading-1.18942\",\"featured\":\"no\",\"series\":\"Paris Climate Talks\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Paris Climate Talks&#58; What we're reading, day 4\\noutlet: Nature\\ndate_published: 2015-12-03\\naddress: http://www.nature.com/news/paris-climate-talks-day-4-what-we-re-reading-1.18942\\nfeatured: no\\nseries: Paris Climate Talks\"}\n\n//# sourceURL=webpack:///./_clips/2015-12-03-What-were-reading-day-4.md?");

/***/ }),

/***/ "./_clips/2015-12-04-What-were-reading-day-5.md":
/*!******************************************************!*\
  !*** ./_clips/2015-12-04-What-were-reading-day-5.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Paris Climate Talks&#58; What we're reading, day 5\",\"outlet\":\"Nature\",\"date_published\":\"2015-12-04T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/paris-climate-talks-day-5-what-we-re-reading-1.18949\",\"featured\":\"no\",\"series\":\"Paris Climate Talks\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Paris Climate Talks&#58; What we're reading, day 5\\noutlet: Nature\\ndate_published: 2015-12-04\\naddress: http://www.nature.com/news/paris-climate-talks-day-5-what-we-re-reading-1.18949\\nfeatured: no\\nseries: Paris Climate Talks\"}\n\n//# sourceURL=webpack:///./_clips/2015-12-04-What-were-reading-day-5.md?");

/***/ }),

/***/ "./_clips/2015-12-05-What-were-reading-day-6.md":
/*!******************************************************!*\
  !*** ./_clips/2015-12-05-What-were-reading-day-6.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Paris Climate Talks&#58; What we're reading, day 6\",\"outlet\":\"Nature\",\"date_published\":\"2015-12-05T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/paris-climate-talks-day-6-what-we-re-reading-1.18957\",\"featured\":\"no\",\"series\":\"Paris Climate Talks\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Paris Climate Talks&#58; What we're reading, day 6\\noutlet: Nature\\ndate_published: 2015-12-05\\naddress: http://www.nature.com/news/paris-climate-talks-day-6-what-we-re-reading-1.18957\\nfeatured: no\\nseries: Paris Climate Talks\"}\n\n//# sourceURL=webpack:///./_clips/2015-12-05-What-were-reading-day-6.md?");

/***/ }),

/***/ "./_clips/2015-12-07-What-were-reading-day-8.md":
/*!******************************************************!*\
  !*** ./_clips/2015-12-07-What-were-reading-day-8.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Paris Climate Talks&#58; What we're reading, day 8\",\"outlet\":\"Nature\",\"date_published\":\"2015-12-07T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/paris-climate-talks-day-8-what-we-re-reading-1.18966\",\"featured\":\"no\",\"series\":\"Paris Climate Talks\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Paris Climate Talks&#58; What we're reading, day 8\\noutlet: Nature\\ndate_published: 2015-12-07\\naddress: http://www.nature.com/news/paris-climate-talks-day-8-what-we-re-reading-1.18966\\nfeatured: no\\nseries: Paris Climate Talks\"}\n\n//# sourceURL=webpack:///./_clips/2015-12-07-What-were-reading-day-8.md?");

/***/ }),

/***/ "./_clips/2015-12-08-What-were-reading-day-9.md":
/*!******************************************************!*\
  !*** ./_clips/2015-12-08-What-were-reading-day-9.md ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Paris Climate Talks&#58; What we're reading, day 9\",\"outlet\":\"Nature\",\"date_published\":\"2015-12-08T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/paris-climate-talks-day-9-what-we-re-reading-1.18982\",\"featured\":\"no\",\"series\":\"Paris Climate Talks\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Paris Climate Talks&#58; What we're reading, day 9\\noutlet: Nature\\ndate_published: 2015-12-08\\naddress: http://www.nature.com/news/paris-climate-talks-day-9-what-we-re-reading-1.18982\\nfeatured: no\\nseries: Paris Climate Talks\"}\n\n//# sourceURL=webpack:///./_clips/2015-12-08-What-were-reading-day-9.md?");

/***/ }),

/***/ "./_clips/2015-12-10-What-were-reading-day-11.md":
/*!*******************************************************!*\
  !*** ./_clips/2015-12-10-What-were-reading-day-11.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Paris Climate Talks&#58; What we're reading, day 11\",\"outlet\":\"Nature\",\"date_published\":\"2015-12-10T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/paris-climate-talks-day-11-what-we-re-reading-1.19005\",\"featured\":\"no\",\"series\":\"Paris Climate Talks\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Paris Climate Talks&#58; What we're reading, day 11\\noutlet: Nature\\ndate_published: 2015-12-10\\naddress: http://www.nature.com/news/paris-climate-talks-day-11-what-we-re-reading-1.19005\\nfeatured: no\\nseries: Paris Climate Talks\"}\n\n//# sourceURL=webpack:///./_clips/2015-12-10-What-were-reading-day-11.md?");

/***/ }),

/***/ "./_clips/2015-12-11-What-were-reading-day-12.md":
/*!*******************************************************!*\
  !*** ./_clips/2015-12-11-What-were-reading-day-12.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Paris Climate Talks&#58; What we're reading, day 12\",\"outlet\":\"Nature\",\"date_published\":\"2015-12-11T00:00:00.000Z\",\"address\":\"http://www.nature.com/news/paris-climate-talks-day-12-what-we-re-reading-1.19014\",\"featured\":\"no\",\"series\":\"Paris Climate Talks\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Paris Climate Talks&#58; What we're reading, day 12\\noutlet: Nature\\ndate_published: 2015-12-11\\naddress: http://www.nature.com/news/paris-climate-talks-day-12-what-we-re-reading-1.19014\\nfeatured: no\\nseries: Paris Climate Talks\"}\n\n//# sourceURL=webpack:///./_clips/2015-12-11-What-were-reading-day-12.md?");

/***/ }),

/***/ "./_clips/2015-12-18-Biomedicine-wins-big-in-US-budget-deal.md":
/*!*********************************************************************!*\
  !*** ./_clips/2015-12-18-Biomedicine-wins-big-in-US-budget-deal.md ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Biomedicine wins big in US budget deal\",\"outlet\":\"Nature\",\"date_published\":\"2015-12-18T00:00:00.000Z\",\"image_url\":\"/images/clips/GettyImages-499643384web.jpg\",\"image_credit\":\"Chip Somodevilla/Getty\",\"address\":\"http://www.nature.com/news/biomedicine-wins-big-in-us-budget-deal-1.19057\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Biomedicine wins big in US budget deal\\noutlet: Nature\\ndate_published: 2015-12-18\\nimage_url: /images/clips/GettyImages-499643384web.jpg\\nimage_credit: Chip Somodevilla/Getty\\naddress: http://www.nature.com/news/biomedicine-wins-big-in-us-budget-deal-1.19057\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-12-18-Biomedicine-wins-big-in-US-budget-deal.md?");

/***/ }),

/***/ "./_clips/2015-12-18-US-toxic-substances-reform-moves-forward.md":
/*!***********************************************************************!*\
  !*** ./_clips/2015-12-18-US-toxic-substances-reform-moves-forward.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"US toxic-substances reform moves forward\",\"outlet\":\"Nature\",\"date_published\":\"2015-12-18T00:00:00.000Z\",\"image_url\":\"/images/clips/GettyImages-161007868WEB.jpg\",\"image_credit\":\"Helen H. Richardson/Denver Post/Getty\",\"address\":\"http://www.nature.com/news/us-toxic-substances-reform-moves-forward-1.18127\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: US toxic-substances reform moves forward\\noutlet: Nature\\ndate_published: 2015-12-18\\nimage_url: /images/clips/GettyImages-161007868WEB.jpg\\nimage_credit: Helen H. Richardson/Denver Post/Getty\\naddress: http://www.nature.com/news/us-toxic-substances-reform-moves-forward-1.18127\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2015-12-18-US-toxic-substances-reform-moves-forward.md?");

/***/ }),

/***/ "./_clips/2016-01-19-Ecology-aims-high.md":
/*!************************************************!*\
  !*** ./_clips/2016-01-19-Ecology-aims-high.md ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"feature\",\"headline\":\"Ecology aims high\",\"outlet\":\"Nature\",\"date_published\":\"2016-01-19T00:00:00.000Z\",\"image_url\":\"/images/clips/IMG_8051.jpg\",\"image_credit\":\"Chris Maddaloni/Nature\",\"address\":\"http://www.nature.com/news/ecology-s-434-000-000-test-1.19187\",\"featured\":\"yes\"},\"body\":\"\",\"frontmatter\":\"type: feature\\nheadline: Ecology aims high\\noutlet: Nature\\ndate_published: 2016-01-19\\nimage_url: /images/clips/IMG_8051.jpg\\nimage_credit: Chris Maddaloni/Nature\\naddress: http://www.nature.com/news/ecology-s-434-000-000-test-1.19187\\nfeatured: yes\"}\n\n//# sourceURL=webpack:///./_clips/2016-01-19-Ecology-aims-high.md?");

/***/ }),

/***/ "./_clips/2016-02-08-Nanoscale-cavity-strongly-links-quantum-particles.md":
/*!********************************************************************************!*\
  !*** ./_clips/2016-02-08-Nanoscale-cavity-strongly-links-quantum-particles.md ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Nanoscale cavity strongly links quantum particles\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-02-08T00:00:00.000Z\",\"image_url\":\"/images/clips/waks_gallery_pcc_spin_2016_-2.jpg\",\"image_credit\":\"S. Kelley/JQI\",\"address\":\"http://jqi.umd.edu/news/nanoscale-cavity-strongly-links-quantum-particles\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Nanoscale cavity strongly links quantum particles\\noutlet: Joint Quantum Institute\\ndate_published: 2016-02-08\\nimage_url: /images/clips/waks_gallery_pcc_spin_2016_-2.jpg\\nimage_credit: S. Kelley/JQI\\naddress: http://jqi.umd.edu/news/nanoscale-cavity-strongly-links-quantum-particles\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-02-08-Nanoscale-cavity-strongly-links-quantum-particles.md?");

/***/ }),

/***/ "./_clips/2016-03-01-QuICS-Researcher-Works-to-Illuminate-the-Power-of-Quantum-Computers.md":
/*!**************************************************************************************************!*\
  !*** ./_clips/2016-03-01-QuICS-Researcher-Works-to-Illuminate-the-Power-of-Quantum-Computers.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"QuICS Researcher Works to Illuminate the Power of Quantum Computers\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-03-01T00:00:00.000Z\",\"address\":\"http://quics.umd.edu/news/quics-researcher-works-illuminate-power-quantum-computers\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: QuICS Researcher Works to Illuminate the Power of Quantum Computers\\noutlet: Joint Quantum Institute\\ndate_published: 2016-03-01\\naddress: http://quics.umd.edu/news/quics-researcher-works-illuminate-power-quantum-computers\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-03-01-QuICS-Researcher-Works-to-Illuminate-the-Power-of-Quantum-Computers.md?");

/***/ }),

/***/ "./_clips/2016-03-16-Rogue-rubidium-leads-to-atomic-anomaly.md":
/*!*********************************************************************!*\
  !*** ./_clips/2016-03-16-Rogue-rubidium-leads-to-atomic-anomaly.md ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Rogue rubidium leads to atomic anomaly\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-03-16T00:00:00.000Z\",\"image_url\":\"/images/clips/rydberg_banner_small_0.jpg\",\"image_credit\":\"S. Kelley/JQI\",\"address\":\"http://jqi.umd.edu/news/rogue-rubidium-leads-atomic-anomaly\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Rogue rubidium leads to atomic anomaly\\noutlet: Joint Quantum Institute\\ndate_published: 2016-03-16\\nimage_url: /images/clips/rydberg_banner_small_0.jpg\\nimage_credit: S. Kelley/JQI\\naddress: http://jqi.umd.edu/news/rogue-rubidium-leads-atomic-anomaly\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-03-16-Rogue-rubidium-leads-to-atomic-anomaly.md?");

/***/ }),

/***/ "./_clips/2016-03-30-Measuring-the-magnetization-of-wandering-spins.md":
/*!*****************************************************************************!*\
  !*** ./_clips/2016-03-30-Measuring-the-magnetization-of-wandering-spins.md ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Measuring the magnetization of wandering spins\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-03-30T00:00:00.000Z\",\"image_url\":\"/images/clips/itinerant_magnetism_banner.jpg\",\"image_credit\":\"S. Kelley/JQI\",\"address\":\"http://jqi.umd.edu/news/measuring-magnetization-wandering-spins\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Measuring the magnetization of wandering spins\\noutlet: Joint Quantum Institute\\ndate_published: 2016-03-30\\nimage_url: /images/clips/itinerant_magnetism_banner.jpg\\nimage_credit: S. Kelley/JQI\\naddress: http://jqi.umd.edu/news/measuring-magnetization-wandering-spins\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-03-30-Measuring-the-magnetization-of-wandering-spins.md?");

/***/ }),

/***/ "./_clips/2016-04-13-No-Time-Like-the-Present-for-Quantum-Programming-Says-QuICS-Postdoc.md":
/*!**************************************************************************************************!*\
  !*** ./_clips/2016-04-13-No-Time-Like-the-Present-for-Quantum-Programming-Says-QuICS-Postdoc.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"No Time Like the Present for Quantum Programming, Says QuICS Postdoc\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-04-13T00:00:00.000Z\",\"address\":\"http://quics.umd.edu/news/no-time-present-quantum-programming-says-quics-postdoc\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: No Time Like the Present for Quantum Programming, Says QuICS Postdoc\\noutlet: Joint Quantum Institute\\ndate_published: 2016-04-13\\naddress: http://quics.umd.edu/news/no-time-present-quantum-programming-says-quics-postdoc\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-04-13-No-Time-Like-the-Present-for-Quantum-Programming-Says-QuICS-Postdoc.md?");

/***/ }),

/***/ "./_clips/2016-04-22-Oscillating-currents-point-to-practical-application-for-topological-insulators.md":
/*!*************************************************************************************************************!*\
  !*** ./_clips/2016-04-22-Oscillating-currents-point-to-practical-application-for-topological-insulators.md ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Oscillating currents point to practical application for topological insulators\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-04-22T00:00:00.000Z\",\"image_url\":\"/images/clips/oscillator_banner2.jpg\",\"image_credit\":\"S. Kelley/JQI and A. Stern/UCI\",\"address\":\"http://jqi.umd.edu/news/oscillating-currents-point-practical-application-topological-insulators\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Oscillating currents point to practical application for topological insulators\\noutlet: Joint Quantum Institute\\ndate_published: 2016-04-22\\nimage_url: /images/clips/oscillator_banner2.jpg\\nimage_credit: S. Kelley/JQI and A. Stern/UCI\\naddress: http://jqi.umd.edu/news/oscillating-currents-point-practical-application-topological-insulators\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-04-22-Oscillating-currents-point-to-practical-application-for-topological-insulators.md?");

/***/ }),

/***/ "./_clips/2016-05-10-Novel-gate-may-enhance-power-of-Majorana-based-quantum-computers.md":
/*!***********************************************************************************************!*\
  !*** ./_clips/2016-05-10-Novel-gate-may-enhance-power-of-Majorana-based-quantum-computers.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Novel gate may enhance power of Majorana-based quantum computers\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-05-10T00:00:00.000Z\",\"image_url\":\"/images/clips/phasegate_banner_colors5.jpg\",\"image_credit\":\"S. Kelley/NIST and D. Clarke/UMD\",\"address\":\"http://jqi.umd.edu/news/novel-gate-may-enhance-power-majorana-based-quantum-computers\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Novel gate may enhance power of Majorana-based quantum computers\\noutlet: Joint Quantum Institute\\ndate_published: 2016-05-10\\nimage_url: /images/clips/phasegate_banner_colors5.jpg\\nimage_credit: S. Kelley/NIST and D. Clarke/UMD\\naddress: http://jqi.umd.edu/news/novel-gate-may-enhance-power-majorana-based-quantum-computers\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-05-10-Novel-gate-may-enhance-power-of-Majorana-based-quantum-computers.md?");

/***/ }),

/***/ "./_clips/2016-05-23-Quantum-cycles-power-cold-atom-pump.md":
/*!******************************************************************!*\
  !*** ./_clips/2016-05-23-Quantum-cycles-power-cold-atom-pump.md ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Quantum cycles power cold-atom pump\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-05-23T00:00:00.000Z\",\"image_url\":\"/images/clips/frame.png\",\"image_credit\":\"S. Kelley/NIST\",\"address\":\"http://jqi.umd.edu/news/quantum-cycles-power-cold-atom-pump\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Quantum cycles power cold-atom pump\\noutlet: Joint Quantum Institute\\ndate_published: 2016-05-23\\nimage_url: /images/clips/frame.png\\nimage_credit: S. Kelley/NIST\\naddress: http://jqi.umd.edu/news/quantum-cycles-power-cold-atom-pump\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-05-23-Quantum-cycles-power-cold-atom-pump.md?");

/***/ }),

/***/ "./_clips/2016-06-06-Disorder-grants-a-memory-to-quantum-spins.md":
/*!************************************************************************!*\
  !*** ./_clips/2016-06-06-Disorder-grants-a-memory-to-quantum-spins.md ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Disorder grants a memory to quantum spins\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-06-06T00:00:00.000Z\",\"image_url\":\"/images/clips/disordermblgallery3monroe-smith-ps.jpg\",\"image_credit\":\"E. Edwards/JQI\",\"address\":\"http://jqi.umd.edu/news/disorder-grants-memory-quantum-spins\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Disorder grants a memory to quantum spins\\noutlet: Joint Quantum Institute\\ndate_published: 2016-06-06\\nimage_url: /images/clips/disordermblgallery3monroe-smith-ps.jpg\\nimage_credit: E. Edwards/JQI\\naddress: http://jqi.umd.edu/news/disorder-grants-memory-quantum-spins\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-06-06-Disorder-grants-a-memory-to-quantum-spins.md?");

/***/ }),

/***/ "./_clips/2016-06-24-Ultra-cold-atoms-may-wade-through-quantum-friction.md":
/*!*********************************************************************************!*\
  !*** ./_clips/2016-06-24-Ultra-cold-atoms-may-wade-through-quantum-friction.md ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Ultra-cold atoms may wade through quantum friction\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-06-24T00:00:00.000Z\",\"image_url\":\"/images/clips/quantum_friction_gallery.jpg\",\"image_credit\":\"S. Kelley/NIST\",\"address\":\"http://jqi.umd.edu/news/ultra-cold-atoms-may-wade-through-quantum-friction\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Ultra-cold atoms may wade through quantum friction\\noutlet: Joint Quantum Institute\\ndate_published: 2016-06-24\\nimage_url: /images/clips/quantum_friction_gallery.jpg\\nimage_credit: S. Kelley/NIST\\naddress: http://jqi.umd.edu/news/ultra-cold-atoms-may-wade-through-quantum-friction\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-06-24-Ultra-cold-atoms-may-wade-through-quantum-friction.md?");

/***/ }),

/***/ "./_clips/2016-08-03-Federal-report-urges-commitment-to-quantum-research.md":
/*!**********************************************************************************!*\
  !*** ./_clips/2016-08-03-Federal-report-urges-commitment-to-quantum-research.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Federal report urges commitment to quantum research\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-08-03T00:00:00.000Z\",\"image_url\":\"/images/clips/0s_1s_thumb.jpg\",\"image_credit\":\"S. Kelley/NIST\",\"address\":\"http://jqi.umd.edu/news/federal-report-urges-commitment-quantum-research\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Federal report urges commitment to quantum research\\noutlet: Joint Quantum Institute\\ndate_published: 2016-08-03\\nimage_url: /images/clips/0s_1s_thumb.jpg\\nimage_credit: S. Kelley/NIST\\naddress: http://jqi.umd.edu/news/federal-report-urges-commitment-quantum-research\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-08-03-Federal-report-urges-commitment-to-quantum-research.md?");

/***/ }),

/***/ "./_clips/2016-08-03-Programmable-ions-set-the-stage-for-general-purpose-quantum-computers.md":
/*!****************************************************************************************************!*\
  !*** ./_clips/2016-08-03-Programmable-ions-set-the-stage-for-general-purpose-quantum-computers.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Programmable ions set the stage for general-purpose quantum computers\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-08-03T00:00:00.000Z\",\"image_url\":\"/images/clips/cover_gallery.jpg\",\"image_credit\":\"S. Debnath and E. Edwards/JQI\",\"address\":\"http://jqi.umd.edu/news/programmable-ions-set-stage-general-purpose-quantum-computers\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Programmable ions set the stage for general-purpose quantum computers\\noutlet: Joint Quantum Institute\\ndate_published: 2016-08-03\\nimage_url: /images/clips/cover_gallery.jpg\\nimage_credit: S. Debnath and E. Edwards/JQI\\naddress: http://jqi.umd.edu/news/programmable-ions-set-stage-general-purpose-quantum-computers\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-08-03-Programmable-ions-set-the-stage-for-general-purpose-quantum-computers.md?");

/***/ }),

/***/ "./_clips/2016-08-08-QuICS-hosts-five-day-workshop-on-quantum-complexity-quandary.md":
/*!*******************************************************************************************!*\
  !*** ./_clips/2016-08-08-QuICS-hosts-five-day-workshop-on-quantum-complexity-quandary.md ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"QuICS hosts five-day workshop on quantum complexity quandary\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-08-08T00:00:00.000Z\",\"image_url\":\"/images/clips/quics%20workshop%202016-%20Quics%20site.jpg\",\"image_credit\":\"C. Cesare/JQI\",\"address\":\"http://quics.umd.edu/news/quics-hosts-five-day-workshop-quantum-complexity-quandary\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: QuICS hosts five-day workshop on quantum complexity quandary\\noutlet: Joint Quantum Institute\\ndate_published: 2016-08-08\\nimage_url: /images/clips/quics%20workshop%202016-%20Quics%20site.jpg\\nimage_credit: C. Cesare/JQI\\naddress: http://quics.umd.edu/news/quics-hosts-five-day-workshop-quantum-complexity-quandary\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-08-08-QuICS-hosts-five-day-workshop-on-quantum-complexity-quandary.md?");

/***/ }),

/***/ "./_clips/2016-09-15-Machine-learning-in-a-quantum-world.md":
/*!******************************************************************!*\
  !*** ./_clips/2016-09-15-Machine-learning-in-a-quantum-world.md ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Machine learning in a quantum world\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-09-15T00:00:00.000Z\",\"image_url\":\"/images/clips/maze6-ps_web.jpg\",\"image_credit\":\"E. Edwards/JQI\",\"address\":\"http://jqi.umd.edu/news/quantum-bit/2016/09/15/machine-learning-quantum-world\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Machine learning in a quantum world\\noutlet: Joint Quantum Institute\\ndate_published: 2016-09-15\\nimage_url: /images/clips/maze6-ps_web.jpg\\nimage_credit: E. Edwards/JQI\\naddress: http://jqi.umd.edu/news/quantum-bit/2016/09/15/machine-learning-quantum-world\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-09-15-Machine-learning-in-a-quantum-world.md?");

/***/ }),

/***/ "./_clips/2016-09-22-QuICS-Hosts-International-Cryptography-Conference-in-Washington-D.C..md":
/*!***************************************************************************************************!*\
  !*** ./_clips/2016-09-22-QuICS-Hosts-International-Cryptography-Conference-in-Washington-D.C..md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"QuICS Hosts International Cryptography Conference in Washington, D.C.\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-09-22T00:00:00.000Z\",\"image_url\":\"/images/clips/QCrypt.jpg\",\"address\":\"https://quics.umd.edu/news/quics-hosts-international-cryptography-conference-washington-dc\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: QuICS Hosts International Cryptography Conference in Washington, D.C.\\noutlet: Joint Quantum Institute\\ndate_published: 2016-09-22\\nimage_url: /images/clips/QCrypt.jpg\\naddress: https://quics.umd.edu/news/quics-hosts-international-cryptography-conference-washington-dc\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-09-22-QuICS-Hosts-International-Cryptography-Conference-in-Washington-D.C..md?");

/***/ }),

/***/ "./_clips/2016-10-04-Physics-Nobel-honors-underpinnings-of-exotic-matter.md":
/*!**********************************************************************************!*\
  !*** ./_clips/2016-10-04-Physics-Nobel-honors-underpinnings-of-exotic-matter.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Physics Nobel honors underpinnings of exotic matter\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-10-04T00:00:00.000Z\",\"image_url\":\"/images/clips/gallery_3.jpg\",\"image_credit\":\"nobelprize.org\",\"address\":\"http://jqi.umd.edu/physics-nobel-topological-exotic-matter\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Physics Nobel honors underpinnings of exotic matter\\noutlet: Joint Quantum Institute\\ndate_published: 2016-10-04\\nimage_url: /images/clips/gallery_3.jpg\\nimage_credit: nobelprize.org\\naddress: http://jqi.umd.edu/physics-nobel-topological-exotic-matter\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-10-04-Physics-Nobel-honors-underpinnings-of-exotic-matter.md?");

/***/ }),

/***/ "./_clips/2016-10-06-A-warm-welcome-for-Weyl-physics.md":
/*!**************************************************************!*\
  !*** ./_clips/2016-10-06-A-warm-welcome-for-Weyl-physics.md ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"A warm welcome for Weyl physics\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-10-06T00:00:00.000Z\",\"image_url\":\"/images/clips/gallery_2.jpg\",\"image_credit\":\"S. Kelley/NIST\",\"address\":\"http://jqi.umd.edu/news/warm-welcome-weyl-physics\",\"featured\":\"no\",\"series\":\"weyl\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: A warm welcome for Weyl physics\\noutlet: Joint Quantum Institute\\ndate_published: 2016-10-06\\nimage_url: /images/clips/gallery_2.jpg\\nimage_credit: S. Kelley/NIST\\naddress: http://jqi.umd.edu/news/warm-welcome-weyl-physics\\nfeatured: no\\nseries: weyl\"}\n\n//# sourceURL=webpack:///./_clips/2016-10-06-A-warm-welcome-for-Weyl-physics.md?");

/***/ }),

/***/ "./_clips/2016-10-13-LOreal-UNESCO-award-goes-to-former-JQI-student-researcher.md":
/*!****************************************************************************************!*\
  !*** ./_clips/2016-10-13-LOreal-UNESCO-award-goes-to-former-JQI-student-researcher.md ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"L'Oreal-UNESCO award goes to former JQI student researcher\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-10-13T00:00:00.000Z\",\"image_url\":\"/images/clips/banner.jpg\",\"image_credit\":\"Foundation L'Oreal\",\"address\":\"http://jqi.umd.edu/news/loreal-unesco-award-goes-former-jqi-student-researcher\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: L'Oreal-UNESCO award goes to former JQI student researcher\\noutlet: Joint Quantum Institute\\ndate_published: 2016-10-13\\nimage_url: /images/clips/banner.jpg\\nimage_credit: Foundation L'Oreal\\naddress: http://jqi.umd.edu/news/loreal-unesco-award-goes-former-jqi-student-researcher\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-10-13-LOreal-UNESCO-award-goes-to-former-JQI-student-researcher.md?");

/***/ }),

/***/ "./_clips/2016-10-14-A-closer-look-at-Weyl-physics.md":
/*!************************************************************!*\
  !*** ./_clips/2016-10-14-A-closer-look-at-Weyl-physics.md ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"A closer look at Weyl physics\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-10-14T00:00:00.000Z\",\"image_url\":\"/images/clips/ortho_close_cs1.jpg\",\"image_credit\":\"S. Kelley/NIST\",\"address\":\"http://jqi.umd.edu/news/closer-look-weyl-physics\",\"featured\":\"no\",\"series\":\"weyl\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: A closer look at Weyl physics\\noutlet: Joint Quantum Institute\\ndate_published: 2016-10-14\\nimage_url: /images/clips/ortho_close_cs1.jpg\\nimage_credit: S. Kelley/NIST\\naddress: http://jqi.umd.edu/news/closer-look-weyl-physics\\nfeatured: no\\nseries: weyl\"}\n\n//# sourceURL=webpack:///./_clips/2016-10-14-A-closer-look-at-Weyl-physics.md?");

/***/ }),

/***/ "./_clips/2016-11-28-Newest-QuICS-Fellow-Brings-a-Mathematicians-Eye-to-Quantum-Puzzles.md":
/*!*************************************************************************************************!*\
  !*** ./_clips/2016-11-28-Newest-QuICS-Fellow-Brings-a-Mathematicians-Eye-to-Quantum-Puzzles.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Newest QuICS Fellow Brings a Mathematician's Eye to Quantum Puzzles\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-11-28T00:00:00.000Z\",\"image_url\":\"/images/clips/miller_news_article.jpg\",\"address\":\"http://quics.umd.edu/news/newest-quics-fellow-brings-mathematicians-eye-quantum-puzzles\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Newest QuICS Fellow Brings a Mathematician's Eye to Quantum Puzzles\\noutlet: Joint Quantum Institute\\ndate_published: 2016-11-28\\nimage_url: /images/clips/miller_news_article.jpg\\naddress: http://quics.umd.edu/news/newest-quics-fellow-brings-mathematicians-eye-quantum-puzzles\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-11-28-Newest-QuICS-Fellow-Brings-a-Mathematicians-Eye-to-Quantum-Puzzles.md?");

/***/ }),

/***/ "./_clips/2016-12-21-A-quantum-year-in-review.md":
/*!*******************************************************!*\
  !*** ./_clips/2016-12-21-A-quantum-year-in-review.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"A quantum year in review\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2016-12-21T00:00:00.000Z\",\"image_url\":\"/images/clips/banner1221-lr.jpg\",\"address\":\"http://jqi.umd.edu/news/quantum-year-review\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: A quantum year in review\\noutlet: Joint Quantum Institute\\ndate_published: 2016-12-21\\nimage_url: /images/clips/banner1221-lr.jpg\\naddress: http://jqi.umd.edu/news/quantum-year-review\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2016-12-21-A-quantum-year-in-review.md?");

/***/ }),

/***/ "./_clips/2017-01-13-QuICS-Sends-Strong-Contingent-to-International-Quantum-Conference.md":
/*!************************************************************************************************!*\
  !*** ./_clips/2017-01-13-QuICS-Sends-Strong-Contingent-to-International-Quantum-Conference.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"QuICS Sends Strong Contingent to International Quantum Conference\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-01-13T00:00:00.000Z\",\"image_url\":\"/images/clips/Fefferman_0.jpg\",\"address\":\"http://quics.umd.edu/news/quics-sends-strong-contingent-international-quantum-conference\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: QuICS Sends Strong Contingent to International Quantum Conference\\noutlet: Joint Quantum Institute\\ndate_published: 2017-01-13\\nimage_url: /images/clips/Fefferman_0.jpg\\naddress: http://quics.umd.edu/news/quics-sends-strong-contingent-international-quantum-conference\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-01-13-QuICS-Sends-Strong-Contingent-to-International-Quantum-Conference.md?");

/***/ }),

/***/ "./_clips/2017-02-20-QuICS-Hartree-Fellow-Is-Seeking-the-Limits-of-Quantum-Compression.md":
/*!************************************************************************************************!*\
  !*** ./_clips/2017-02-20-QuICS-Hartree-Fellow-Is-Seeking-the-Limits-of-Quantum-Compression.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"QuICS Hartree Fellow Is Seeking the Limits of Quantum Compression\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-02-20T00:00:00.000Z\",\"address\":\"http://quics.umd.edu/news/quics-hartree-fellow-seeking-limits-quantum-compression\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: QuICS Hartree Fellow Is Seeking the Limits of Quantum Compression\\noutlet: Joint Quantum Institute\\ndate_published: 2017-02-20\\naddress: http://quics.umd.edu/news/quics-hartree-fellow-seeking-limits-quantum-compression\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-02-20-QuICS-Hartree-Fellow-Is-Seeking-the-Limits-of-Quantum-Compression.md?");

/***/ }),

/***/ "./_clips/2017-02-21-Crossing-the-quantum-chaotic-divide.md":
/*!******************************************************************!*\
  !*** ./_clips/2017-02-21-Crossing-the-quantum-chaotic-divide.md ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Crossing the quantum-chaotic divide\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-02-21T00:00:00.000Z\",\"image_url\":\"/images/clips/chaos_gallery-2crop.jpg\",\"image_credit\":\"E. Rozenbaum and E. Edwards/JQI\",\"address\":\"http://jqi.umd.edu/news/crossing-quantum-chaotic-divide\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Crossing the quantum-chaotic divide\\noutlet: Joint Quantum Institute\\ndate_published: 2017-02-21\\nimage_url: /images/clips/chaos_gallery-2crop.jpg\\nimage_credit: E. Rozenbaum and E. Edwards/JQI\\naddress: http://jqi.umd.edu/news/crossing-quantum-chaotic-divide\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-02-21-Crossing-the-quantum-chaotic-divide.md?");

/***/ }),

/***/ "./_clips/2017-03-08-Ions-sync-up-into-worlds-first-time-crystal.md":
/*!**************************************************************************!*\
  !*** ./_clips/2017-03-08-Ions-sync-up-into-worlds-first-time-crystal.md ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Ions sync up into world's first time crystal\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-03-08T00:00:00.000Z\",\"image_url\":\"/images/clips/time_crystals_gallery.jpg\",\"image_credit\":\"E. Edwards/JQI\",\"address\":\"http://jqi.umd.edu/news/ions-sync-into-worlds-first-time-crystal\",\"featured\":\"yes\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Ions sync up into world's first time crystal\\noutlet: Joint Quantum Institute\\ndate_published: 2017-03-08\\nimage_url: /images/clips/time_crystals_gallery.jpg\\nimage_credit: E. Edwards/JQI\\naddress: http://jqi.umd.edu/news/ions-sync-into-worlds-first-time-crystal\\nfeatured: yes\"}\n\n//# sourceURL=webpack:///./_clips/2017-03-08-Ions-sync-up-into-worlds-first-time-crystal.md?");

/***/ }),

/***/ "./_clips/2017-03-10-Wellstood-named-new-UMD-Co-Director-of-JQI.md":
/*!*************************************************************************!*\
  !*** ./_clips/2017-03-10-Wellstood-named-new-UMD-Co-Director-of-JQI.md ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Wellstood named new UMD Co-Director of JQI\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-03-10T00:00:00.000Z\",\"image_url\":\"/images/clips/wellstood_gallery.jpg\",\"image_credit\":\"C. Cesare/JQI\",\"address\":\"http://jqi.umd.edu/news/wellstood-named-new-umd-co-director-jqi\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Wellstood named new UMD Co-Director of JQI\\noutlet: Joint Quantum Institute\\ndate_published: 2017-03-10\\nimage_url: /images/clips/wellstood_gallery.jpg\\nimage_credit: C. Cesare/JQI\\naddress: http://jqi.umd.edu/news/wellstood-named-new-umd-co-director-jqi\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-03-10-Wellstood-named-new-UMD-Co-Director-of-JQI.md?");

/***/ }),

/***/ "./_clips/2017-04-04-HAWC-high-energy-gamma-rays.md":
/*!**********************************************************!*\
  !*** ./_clips/2017-04-04-HAWC-high-energy-gamma-rays.md ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"podcast\",\"headline\":\"HAWC and the high-energy gamma rays\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-04-04T00:00:00.000Z\",\"image_url\":\"/images/clips/hawcorizaba.jpg\",\"image_credit\":\"J. Goodman\",\"address\":\"http://jqi.umd.edu/news/podcast/jqi-podcast-episode-12\",\"embed_code\":\"<iframe width=\\\"100%\\\" height=\\\"166\\\" scrolling=\\\"no\\\" frameborder=\\\"no\\\" src=\\\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316085200\\\"></iframe>\",\"featured\":\"yes\"},\"body\":\"\",\"frontmatter\":\"type: podcast\\nheadline: HAWC and the high-energy gamma rays\\noutlet: Joint Quantum Institute\\ndate_published: 2017-04-04\\nimage_url: /images/clips/hawcorizaba.jpg\\nimage_credit: J. Goodman\\naddress: http://jqi.umd.edu/news/podcast/jqi-podcast-episode-12\\nembed_code: <iframe width=\\\"100%\\\" height=\\\"166\\\" scrolling=\\\"no\\\" frameborder=\\\"no\\\" src=\\\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316085200\\\"></iframe>\\nfeatured: yes\"}\n\n//# sourceURL=webpack:///./_clips/2017-04-04-HAWC-high-energy-gamma-rays.md?");

/***/ }),

/***/ "./_clips/2017-05-09-Tiny-tug-unleashes-cryogenic-currents.md":
/*!********************************************************************!*\
  !*** ./_clips/2017-05-09-Tiny-tug-unleashes-cryogenic-currents.md ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Tiny tug unleashes cryogenic currents\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-05-09T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/banner_blurred_gallery.jpg?itok=_460gOAg\",\"image_credit\":\"A. Stern/UCI\",\"address\":\"http://jqi.umd.edu/news/tiny-tug-unleashes-cryogenic-currents\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Tiny tug unleashes cryogenic currents\\noutlet: Joint Quantum Institute\\ndate_published: 2017-05-09\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/banner_blurred_gallery.jpg?itok=_460gOAg\\nimage_credit: A. Stern/UCI\\naddress: http://jqi.umd.edu/news/tiny-tug-unleashes-cryogenic-currents\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-05-09-Tiny-tug-unleashes-cryogenic-currents.md?");

/***/ }),

/***/ "./_clips/2017-05-18-The-limits-of-computation.md":
/*!********************************************************!*\
  !*** ./_clips/2017-05-18-The-limits-of-computation.md ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"podcast\",\"headline\":\"The limits of computation\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-05-18T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/complexity_theory_gallery.jpg?itok=LlFvrWOB\",\"image_credit\":\"Yuri Samoilov/CC BY 2.0\",\"address\":\"http://jqi.umd.edu/news/podcast/limits-computation\",\"embed_code\":null,\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: podcast\\nheadline: The limits of computation\\noutlet: Joint Quantum Institute\\ndate_published: 2017-05-18\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/complexity_theory_gallery.jpg?itok=LlFvrWOB\\nimage_credit: Yuri Samoilov/CC BY 2.0\\naddress: http://jqi.umd.edu/news/podcast/limits-computation\\nembed_code:\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-05-18-The-limits-of-computation.md?");

/***/ }),

/***/ "./_clips/2017-06-12-Neural-networks-take-on-quantum-entanglement.md":
/*!***************************************************************************!*\
  !*** ./_clips/2017-06-12-Neural-networks-take-on-quantum-entanglement.md ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Neural networks take on quantum entanglement\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-06-12T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/neuralnetworksv4-gallery.jpg?itok=DouzLiKA\",\"image_credit\":\"E. Edwards/JQI\",\"address\":\"http://jqi.umd.edu/news/neural-networks-take-on-quantum-entanglement\",\"featured\":\"yes\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Neural networks take on quantum entanglement\\noutlet: Joint Quantum Institute\\ndate_published: 2017-06-12\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/neuralnetworksv4-gallery.jpg?itok=DouzLiKA\\nimage_credit: E. Edwards/JQI\\naddress: http://jqi.umd.edu/news/neural-networks-take-on-quantum-entanglement\\nfeatured: yes\"}\n\n//# sourceURL=webpack:///./_clips/2017-06-12-Neural-networks-take-on-quantum-entanglement.md?");

/***/ }),

/***/ "./_clips/2017-07-12-Atomic-cousins-team-up-in-early-quantum-networking-node.md":
/*!**************************************************************************************!*\
  !*** ./_clips/2017-07-12-Atomic-cousins-team-up-in-early-quantum-networking-node.md ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Atomic cousins team up in early quantum networking node\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-07-12T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/multi_species_module_editors_suggestion_graphic3-1.jpg?itok=Ih8-5pd7\",\"image_credit\":\"V. Inlek/JQI and M. Lichtman/JQI\",\"address\":\"http://jqi.umd.edu/news/atomic-cousins-team-early-quantum-networking-node\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Atomic cousins team up in early quantum networking node\\noutlet: Joint Quantum Institute\\ndate_published: 2017-07-12\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/multi_species_module_editors_suggestion_graphic3-1.jpg?itok=Ih8-5pd7\\nimage_credit: V. Inlek/JQI and M. Lichtman/JQI\\naddress: http://jqi.umd.edu/news/atomic-cousins-team-early-quantum-networking-node\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-07-12-Atomic-cousins-team-up-in-early-quantum-networking-node.md?");

/***/ }),

/***/ "./_clips/2017-07-31-Long-live-MATHUSLA.md":
/*!*************************************************!*\
  !*** ./_clips/2017-07-31-Long-live-MATHUSLA.md ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"podcast\",\"headline\":\"Long live MATHUSLA\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-07-31T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/gallery_edit.jpg?itok=m6bSFPsi\",\"image_credit\":\"Maximilien Brice/CERN/CC BY-SA 4.0\",\"address\":\"http://jqi.umd.edu/news/podcast/long-live-mathusla\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: podcast\\nheadline: Long live MATHUSLA\\noutlet: Joint Quantum Institute\\ndate_published: 2017-07-31\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/gallery_edit.jpg?itok=m6bSFPsi\\nimage_credit: Maximilien Brice/CERN/CC BY-SA 4.0\\naddress: http://jqi.umd.edu/news/podcast/long-live-mathusla\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-07-31-Long-live-MATHUSLA.md?");

/***/ }),

/***/ "./_clips/2017-08-04-QuICS-Hosts-Workshop-Blending-Computer-Science-and-Modern-Physics.md":
/*!************************************************************************************************!*\
  !*** ./_clips/2017-08-04-QuICS-Hosts-Workshop-Blending-Computer-Science-and-Modern-Physics.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"QuICS Hosts Workshop Blending Computer Science and Modern Physics\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-08-04T00:00:00.000Z\",\"image_url\":\"https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/QuICS%20news_0.JPG?itok=BNzZF3fv\",\"image_credit\":\"T. Ventsias/UMIACS\",\"address\":\"http://quics.umd.edu/news/quics-hosts-workshop-blending-computer-science-and-modern-physics\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: QuICS Hosts Workshop Blending Computer Science and Modern Physics\\noutlet: Joint Quantum Institute\\ndate_published: 2017-08-04\\nimage_url: https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/QuICS%20news_0.JPG?itok=BNzZF3fv\\nimage_credit: T. Ventsias/UMIACS\\naddress: http://quics.umd.edu/news/quics-hosts-workshop-blending-computer-science-and-modern-physics\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-08-04-QuICS-Hosts-Workshop-Blending-Computer-Science-and-Modern-Physics.md?");

/***/ }),

/***/ "./_clips/2017-08-23-Newest-QuICS-Fellow-Expands-Research-Beyond-the-Intersection-of-Computer-Science-and-Physics.md":
/*!***************************************************************************************************************************!*\
  !*** ./_clips/2017-08-23-Newest-QuICS-Fellow-Expands-Research-Beyond-the-Intersection-of-Computer-Science-and-Physics.md ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Newest QuICS Fellow Expands Research Beyond the Intersection of Computer Science and Physics\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-08-23T00:00:00.000Z\",\"image_url\":\"https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/XiaodiWu_01252018_3361.JPG?itok=khieALdr\",\"image_credit\":\"UMIACS\",\"address\":\"http://quics.umd.edu/news/newest-quics-fellow-expands-research-beyond-intersection-computer-science-and-physics\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Newest QuICS Fellow Expands Research Beyond the Intersection of Computer Science and Physics\\noutlet: Joint Quantum Institute\\ndate_published: 2017-08-23\\nimage_url: https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/XiaodiWu_01252018_3361.JPG?itok=khieALdr\\nimage_credit: UMIACS\\naddress: http://quics.umd.edu/news/newest-quics-fellow-expands-research-beyond-intersection-computer-science-and-physics\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-08-23-Newest-QuICS-Fellow-Expands-Research-Beyond-the-Intersection-of-Computer-Science-and-Physics.md?");

/***/ }),

/***/ "./_clips/2017-09-01-Long-range-interactions-leave-a-quantum-reminder.md":
/*!*******************************************************************************!*\
  !*** ./_clips/2017-09-01-Long-range-interactions-leave-a-quantum-reminder.md ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"highlight\",\"headline\":\"Long-range interactions leave a quantum reminder\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-09-01T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/cup-of-coffee-2275793_1920.jpg?itok=gZTxo9fy\",\"address\":\"http://jqi.umd.edu/news/long-range-interactions-leave-quantum-reminder\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: highlight\\nheadline: Long-range interactions leave a quantum reminder\\noutlet: Joint Quantum Institute\\ndate_published: 2017-09-01\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/cup-of-coffee-2275793_1920.jpg?itok=gZTxo9fy\\naddress: http://jqi.umd.edu/news/long-range-interactions-leave-quantum-reminder\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-09-01-Long-range-interactions-leave-a-quantum-reminder.md?");

/***/ }),

/***/ "./_clips/2017-09-08-QuICS-Brings-200-Scientists-to-UMD-for-Quantum-Error-Correction-Conference.md":
/*!*********************************************************************************************************!*\
  !*** ./_clips/2017-09-08-QuICS-Brings-200-Scientists-to-UMD-for-Quantum-Error-Correction-Conference.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"QuICS Brings 200 Scientists to UMD for Quantum Error Correction Conference\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-09-08T00:00:00.000Z\",\"image_url\":\"https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/QuICS%20main_0.png?itok=inDiutej\",\"address\":\"https://quics.umd.edu/news/quics-brings-200-scientists-umd-quantum-error-correction-conference\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: QuICS Brings 200 Scientists to UMD for Quantum Error Correction Conference\\noutlet: Joint Quantum Institute\\ndate_published: 2017-09-08\\nimage_url: https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/QuICS%20main_0.png?itok=inDiutej\\naddress: https://quics.umd.edu/news/quics-brings-200-scientists-umd-quantum-error-correction-conference\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-09-08-QuICS-Brings-200-Scientists-to-UMD-for-Quantum-Error-Correction-Conference.md?");

/***/ }),

/***/ "./_clips/2017-10-04-The-Nobel-Prize-A-LIGO-QA.md":
/*!********************************************************!*\
  !*** ./_clips/2017-10-04-The-Nobel-Prize-A-LIGO-QA.md ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"podcast\",\"headline\":\"The Nobel Prize&#58; A LIGO Q&A\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-10-04T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/ligo_graphic.jpg?itok=hv8ZYwWl\",\"image_credit\":\"The LIGO Scientific Collaboration\",\"address\":\"http://jqi.umd.edu/news/podcast/nobel-prize-ligo-qa\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: podcast\\nheadline: The Nobel Prize&#58; A LIGO Q&A\\noutlet: Joint Quantum Institute\\ndate_published: 2017-10-04\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/ligo_graphic.jpg?itok=hv8ZYwWl\\nimage_credit: The LIGO Scientific Collaboration\\naddress: http://jqi.umd.edu/news/podcast/nobel-prize-ligo-qa\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-10-04-The-Nobel-Prize-A-LIGO-QA.md?");

/***/ }),

/***/ "./_clips/2017-11-16-High-altitude-Observatory-Sheds-Light-on-Origin-of-Excess-Anti-matter.md":
/*!****************************************************************************************************!*\
  !*** ./_clips/2017-11-16-High-altitude-Observatory-Sheds-Light-on-Origin-of-Excess-Anti-matter.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"High-altitude Observatory Sheds Light on Origin of Excess Anti-matter\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-11-16T00:00:00.000Z\",\"image_url\":\"https://cmns.umd.edu/sites/default/files/uploads/hawc-panorama-nov-2017a_web.jpg\",\"address\":\"https://cmns.umd.edu/news-events/features/4027\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: High-altitude Observatory Sheds Light on Origin of Excess Anti-matter\\noutlet: Joint Quantum Institute\\ndate_published: 2017-11-16\\nimage_url: https://cmns.umd.edu/sites/default/files/uploads/hawc-panorama-nov-2017a_web.jpg\\naddress: https://cmns.umd.edu/news-events/features/4027\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-11-16-High-altitude-Observatory-Sheds-Light-on-Origin-of-Excess-Anti-matter.md?");

/***/ }),

/***/ "./_clips/2017-11-30-Quantum-Physics-and-Gravity-Meet-in-Newest-QuICS-Fellows-Research.md":
/*!************************************************************************************************!*\
  !*** ./_clips/2017-11-30-Quantum-Physics-and-Gravity-Meet-in-Newest-QuICS-Fellows-Research.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Quantum Physics and Gravity Meet in Newest QuICS Fellow’s Research\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2017-11-30T00:00:00.000Z\",\"image_url\":\"https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/BrianSwingle_01252018_3583.JPG?itok=E4Agrie-\",\"address\":\"http://quics.umd.edu/news/quantum-physics-and-gravity-meet-newest-quics-fellow%E2%80%99s-research\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Quantum Physics and Gravity Meet in Newest QuICS Fellow’s Research\\noutlet: Joint Quantum Institute\\ndate_published: 2017-11-30\\nimage_url: https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/BrianSwingle_01252018_3583.JPG?itok=E4Agrie-\\naddress: http://quics.umd.edu/news/quantum-physics-and-gravity-meet-newest-quics-fellow%E2%80%99s-research\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2017-11-30-Quantum-Physics-and-Gravity-Meet-in-Newest-QuICS-Fellows-Research.md?");

/***/ }),

/***/ "./_clips/2018-01-12-QuICS-Contingent-Heads-to-Premier-Quantum-Information-Conference.md":
/*!***********************************************************************************************!*\
  !*** ./_clips/2018-01-12-QuICS-Contingent-Heads-to-Premier-Quantum-Information-Conference.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"QuICS Contingent Heads to Premier Quantum Information Conference\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-01-12T00:00:00.000Z\",\"image_url\":\"https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/quics%20article.jpg?itok=-7ZCkpNr\",\"address\":\"http://quics.umd.edu/news/quics-contingent-heads-premier-quantum-information-conference\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: QuICS Contingent Heads to Premier Quantum Information Conference\\noutlet: Joint Quantum Institute\\ndate_published: 2018-01-12\\nimage_url: https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/quics%20article.jpg?itok=-7ZCkpNr\\naddress: http://quics.umd.edu/news/quics-contingent-heads-premier-quantum-information-conference\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-01-12-QuICS-Contingent-Heads-to-Premier-Quantum-Information-Conference.md?");

/***/ }),

/***/ "./_clips/2018-02-15-JQI_Fellow_Maissam_Barkeshli_receives_2018_Sloan_Research_Fellowship.md":
/*!***************************************************************************************************!*\
  !*** ./_clips/2018-02-15-JQI_Fellow_Maissam_Barkeshli_receives_2018_Sloan_Research_Fellowship.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"JQI Fellow Maissam Barkeshli receives 2018 Sloan Research Fellowship\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-02-15T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/maissam-barkeshli1_0.jpg?itok=G2nIiPzE\",\"address\":\"http://jqi.umd.edu/news/jqi-fellow-maissam-barkeshli-receives-2018-sloan-research-fellowship\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: JQI Fellow Maissam Barkeshli receives 2018 Sloan Research Fellowship\\noutlet: Joint Quantum Institute\\ndate_published: 2018-02-15\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/maissam-barkeshli1_0.jpg?itok=G2nIiPzE\\naddress: http://jqi.umd.edu/news/jqi-fellow-maissam-barkeshli-receives-2018-sloan-research-fellowship\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-02-15-JQI_Fellow_Maissam_Barkeshli_receives_2018_Sloan_Research_Fellowship.md?");

/***/ }),

/***/ "./_clips/2018-03-09-Physics_at_the_edge_of_the_world.md":
/*!***************************************************************!*\
  !*** ./_clips/2018-03-09-Physics_at_the_edge_of_the_world.md ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"podcast\",\"headline\":\"Physics at the edge of the world\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-03-09T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/amundsen_scott_banner.jpg?itok=wume7GNkhttp://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/ligo_graphic.jpg?itok=hv8ZYwWl\",\"image_credit\":\"Dwight Bohnet/NSF\",\"address\":\"http://jqi.umd.edu/news/podcast/physics-edge-world\",\"featured\":\"yes\"},\"body\":\"\",\"frontmatter\":\"type: podcast\\nheadline: Physics at the edge of the world\\noutlet: Joint Quantum Institute\\ndate_published: 2018-03-09\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/amundsen_scott_banner.jpg?itok=wume7GNkhttp://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/ligo_graphic.jpg?itok=hv8ZYwWl\\nimage_credit: Dwight Bohnet/NSF\\naddress: http://jqi.umd.edu/news/podcast/physics-edge-world\\nfeatured: yes\"}\n\n//# sourceURL=webpack:///./_clips/2018-03-09-Physics_at_the_edge_of_the_world.md?");

/***/ }),

/***/ "./_clips/2018-03-28-Latest_nanowire_experiment_boosts_confidence_in_Majorana_sighting.md":
/*!************************************************************************************************!*\
  !*** ./_clips/2018-03-28-Latest_nanowire_experiment_boosts_confidence_in_Majorana_sighting.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Latest nanowire experiment boosts confidence in Majorana sighting\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-03-28T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/das_sarma_majorana_gallery_0.jpg?itok=DfF1jjQS\",\"address\":\"http://jqi.umd.edu/news/latest-nanowire-experiment-boosts-confidence-majorana-sighting\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Latest nanowire experiment boosts confidence in Majorana sighting\\noutlet: Joint Quantum Institute\\ndate_published: 2018-03-28\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/das_sarma_majorana_gallery_0.jpg?itok=DfF1jjQS\\naddress: http://jqi.umd.edu/news/latest-nanowire-experiment-boosts-confidence-majorana-sighting\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-03-28-Latest_nanowire_experiment_boosts_confidence_in_Majorana_sighting.md?");

/***/ }),

/***/ "./_clips/2018-04-09-Theoretical_model_offers_more_complete_account_of_robotic_gripping_physics.md":
/*!*********************************************************************************************************!*\
  !*** ./_clips/2018-04-09-Theoretical_model_offers_more_complete_account_of_robotic_gripping_physics.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Theoretical model offers more complete account of robotic gripping physics\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-04-09T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-15/1.5033422/20180408/images/large/1.5033422.figures.online.f1.jpeg\",\"address\":\"https://aip.scitation.org/doi/full/10.1063/1.5033422\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Theoretical model offers more complete account of robotic gripping physics\\noutlet: American Institute of Physics\\ndate_published: 2018-04-09\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-15/1.5033422/20180408/images/large/1.5033422.figures.online.f1.jpeg\\naddress: https://aip.scitation.org/doi/full/10.1063/1.5033422\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-04-09-Theoretical_model_offers_more_complete_account_of_robotic_gripping_physics.md?");

/***/ }),

/***/ "./_clips/2018-04-16-Counting_Queries_Helps_New_QuICS_Hartree_Fellow_Bound_Quantum_Advantages.md":
/*!*******************************************************************************************************!*\
  !*** ./_clips/2018-04-16-Counting_Queries_Helps_New_QuICS_Hartree_Fellow_Bound_Quantum_Advantages.md ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Counting Queries Helps New QuICS Hartree Fellow Bound Quantum Advantages\",\"outlet\":\"Joint Quantum Institute\",\"image_url\":\"https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/ShalevBenDavid.JPG?itok=sisuGBJ-\",\"date_published\":\"2017-04-16T00:00:00.000Z\",\"address\":\"http://quics.umd.edu/news/counting-queries-helps-new-quics-hartree-fellow-bound-quantum-advantages\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Counting Queries Helps New QuICS Hartree Fellow Bound Quantum Advantages\\noutlet: Joint Quantum Institute\\nimage_url: https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/ShalevBenDavid.JPG?itok=sisuGBJ-\\ndate_published: 2017-04-16\\naddress: http://quics.umd.edu/news/counting-queries-helps-new-quics-hartree-fellow-bound-quantum-advantages\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-04-16-Counting_Queries_Helps_New_QuICS_Hartree_Fellow_Bound_Quantum_Advantages.md?");

/***/ }),

/***/ "./_clips/2018-04-19-Atoms_may_hum_a_tune_from_grand_cosmic_symphony.md":
/*!******************************************************************************!*\
  !*** ./_clips/2018-04-19-Atoms_may_hum_a_tune_from_grand_cosmic_symphony.md ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Atoms may hum a tune from grand cosmic symphony\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-04-19T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/images/bec_expansion1.jpg\",\"address\":\"http://jqi.umd.edu/news/atoms-may-hum-tune-grand-cosmic-symphony\",\"featured\":\"yes\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Atoms may hum a tune from grand cosmic symphony\\noutlet: Joint Quantum Institute\\ndate_published: 2018-04-19\\nimage_url: https://jqi.umd.edu/sites/default/files/images/bec_expansion1.jpg\\naddress: http://jqi.umd.edu/news/atoms-may-hum-tune-grand-cosmic-symphony\\nfeatured: yes\"}\n\n//# sourceURL=webpack:///./_clips/2018-04-19-Atoms_may_hum_a_tune_from_grand_cosmic_symphony.md?");

/***/ }),

/***/ "./_clips/2018-05-03-Metamaterial_foundations_may_offer_buildings_better_earthquake_resistance.md":
/*!********************************************************************************************************!*\
  !*** ./_clips/2018-05-03-Metamaterial_foundations_may_offer_buildings_better_earthquake_resistance.md ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Metamaterial foundations may offer buildings better earthquake resistance\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-05-03T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-18/1.5037806/20180502/images/large/1.5037806.figures.online.f1.jpeg\",\"address\":\"https://aip.scitation.org/doi/10.1063/1.5037806\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Metamaterial foundations may offer buildings better earthquake resistance\\noutlet: American Institute of Physics\\ndate_published: 2018-05-03\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-18/1.5037806/20180502/images/large/1.5037806.figures.online.f1.jpeg\\naddress: https://aip.scitation.org/doi/10.1063/1.5037806\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-05-03-Metamaterial_foundations_may_offer_buildings_better_earthquake_resistance.md?");

/***/ }),

/***/ "./_clips/2018-05-31-Ions_drive_macroscopic_flows_in_water.md":
/*!********************************************************************!*\
  !*** ./_clips/2018-05-31-Ions_drive_macroscopic_flows_in_water.md ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Ions drive macroscopic flows in water\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-05-31T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-22/1.5040814/20180530/images/medium/1.5040814.figures.online.f1.jpg\",\"address\":\"https://aip.scitation.org/doi/full/10.1063/1.5040814\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Ions drive macroscopic flows in water\\noutlet: American Institute of Physics\\ndate_published: 2018-05-31\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-22/1.5040814/20180530/images/medium/1.5040814.figures.online.f1.jpg\\naddress: https://aip.scitation.org/doi/full/10.1063/1.5040814\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-05-31-Ions_drive_macroscopic_flows_in_water.md?");

/***/ }),

/***/ "./_clips/2018-06-01-Life-at-the-edge-of-the-world.md":
/*!************************************************************!*\
  !*** ./_clips/2018-06-01-Life-at-the-edge-of-the-world.md ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"podcast\",\"headline\":\"Life at the edge of the world\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-06-01T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/trencher_gallery.jpg?itok=rDzmDG0y\",\"image_credit\":\"Liz Friedman/UMD\",\"address\":\"http://jqi.umd.edu/news/podcast/life-edge-world\",\"featured\":\"yes\"},\"body\":\"\",\"frontmatter\":\"type: podcast\\nheadline: Life at the edge of the world\\noutlet: Joint Quantum Institute\\ndate_published: 2018-06-01\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/trencher_gallery.jpg?itok=rDzmDG0y\\nimage_credit: Liz Friedman/UMD\\naddress: http://jqi.umd.edu/news/podcast/life-edge-world\\nfeatured: yes\"}\n\n//# sourceURL=webpack:///./_clips/2018-06-01-Life-at-the-edge-of-the-world.md?");

/***/ }),

/***/ "./_clips/2018-06-12-Droplet_networks_rearrange_in_response_to_electrical_ruptures.md":
/*!********************************************************************************************!*\
  !*** ./_clips/2018-06-12-Droplet_networks_rearrange_in_response_to_electrical_ruptures.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Droplet networks rearrange in response to electrical ruptures\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-06-12T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-24/1.5043412/20180611/images/medium/1.5043412.figures.online.highlight_f1.jpg\",\"address\":\"https://aip.scitation.org/doi/full/10.1063/1.5043412\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Droplet networks rearrange in response to electrical ruptures\\noutlet: American Institute of Physics\\ndate_published: 2018-06-12\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-24/1.5043412/20180611/images/medium/1.5043412.figures.online.highlight_f1.jpg\\naddress: https://aip.scitation.org/doi/full/10.1063/1.5043412\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-06-12-Droplet_networks_rearrange_in_response_to_electrical_ruptures.md?");

/***/ }),

/***/ "./_clips/2018-06-13-Genetic_algorithms_shape_laser_pulses_to_optimize_plasma_X-ray_production.md":
/*!********************************************************************************************************!*\
  !*** ./_clips/2018-06-13-Genetic_algorithms_shape_laser_pulses_to_optimize_plasma_X-ray_production.md ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Genetic algorithms shape laser pulses to optimize plasma X-ray production\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-06-13T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-24/1.5043091/20180612/images/medium/1.5043091.figures.online.highlight_f1.jpg\",\"address\":\"https://aip.scitation.org/doi/full/10.1063/1.5043091\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Genetic algorithms shape laser pulses to optimize plasma X-ray production\\noutlet: American Institute of Physics\\ndate_published: 2018-06-13\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-24/1.5043091/20180612/images/medium/1.5043091.figures.online.highlight_f1.jpg\\naddress: https://aip.scitation.org/doi/full/10.1063/1.5043091\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-06-13-Genetic_algorithms_shape_laser_pulses_to_optimize_plasma_X-ray_production.md?");

/***/ }),

/***/ "./_clips/2018-06-28-Quantum_gas_reveals_first_signs_of_path-bending_monopole.md":
/*!***************************************************************************************!*\
  !*** ./_clips/2018-06-28-Quantum_gas_reveals_first_signs_of_path-bending_monopole.md ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Quantum gas reveals first signs of path-bending monopole\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-06-28T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/spielman_sphere-7.jpg?itok=ex2nkyb5\",\"address\":\"http://jqi.umd.edu/news/quantum-gas-reveals-first-signs-path-bending-monopole\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Quantum gas reveals first signs of path-bending monopole\\noutlet: Joint Quantum Institute\\ndate_published: 2018-06-28\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/spielman_sphere-7.jpg?itok=ex2nkyb5\\naddress: http://jqi.umd.edu/news/quantum-gas-reveals-first-signs-path-bending-monopole\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-06-28-Quantum_gas_reveals_first_signs_of_path-bending_monopole.md?");

/***/ }),

/***/ "./_clips/2018-07-03-Fusion_reactors_may_get_some_help_from_meandering_electrons.md":
/*!******************************************************************************************!*\
  !*** ./_clips/2018-07-03-Fusion_reactors_may_get_some_help_from_meandering_electrons.md ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Fusion reactors may get some help from meandering electrons\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-07-03T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-27/1.5045696/20180703/images/large/1.5045696.figures.online.f1.jpeg\",\"address\":\"https://aip.scitation.org/doi/full/10.1063/1.5045696\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Fusion reactors may get some help from meandering electrons\\noutlet: American Institute of Physics\\ndate_published: 2018-07-03\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-27/1.5045696/20180703/images/large/1.5045696.figures.online.f1.jpeg\\naddress: https://aip.scitation.org/doi/full/10.1063/1.5045696\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-07-03-Fusion_reactors_may_get_some_help_from_meandering_electrons.md?");

/***/ }),

/***/ "./_clips/2018-07-05-Inducing_movement_controls_the_emission_of_a_random_laser.md":
/*!****************************************************************************************!*\
  !*** ./_clips/2018-07-05-Inducing_movement_controls_the_emission_of_a_random_laser.md ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Inducing movement controls the emission of a random laser\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-07-05T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-27/1.5046838/20180703/images/large/1.5046838.figures.online.f1.jpeg\",\"address\":\"https://doi.org/10.1063/1.5046838\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Inducing movement controls the emission of a random laser\\noutlet: American Institute of Physics\\ndate_published: 2018-07-05\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-27/1.5046838/20180703/images/large/1.5046838.figures.online.f1.jpeg\\naddress: https://doi.org/10.1063/1.5046838\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-07-05-Inducing_movement_controls_the_emission_of_a_random_laser.md?");

/***/ }),

/***/ "./_clips/2018-07-12-IceCube-Neutrinos-Point-to-Long-sought-Cosmic-Ray-Accelerator.md":
/*!********************************************************************************************!*\
  !*** ./_clips/2018-07-12-IceCube-Neutrinos-Point-to-Long-sought-Cosmic-Ray-Accelerator.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"(Adapted from a press release written by another institution)\",\"headline\":\"High-altitude Observatory Sheds Light on Origin of Excess Anti-matter\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-07-12T00:00:00.000Z\",\"image_url\":\"https://cmns.umd.edu/sites/default/files/uploads/icecubeneutrinos_web.jpg\",\"address\":\"https://cmns.umd.edu/news-events/features/4170\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: (Adapted from a press release written by another institution)\\nheadline: High-altitude Observatory Sheds Light on Origin of Excess Anti-matter\\noutlet: Joint Quantum Institute\\ndate_published: 2018-07-12\\nimage_url: https://cmns.umd.edu/sites/default/files/uploads/icecubeneutrinos_web.jpg\\naddress: https://cmns.umd.edu/news-events/features/4170\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-07-12-IceCube-Neutrinos-Point-to-Long-sought-Cosmic-Ray-Accelerator.md?");

/***/ }),

/***/ "./_clips/2018-08-02-Complexity-test-offers-new-perspective-on-small-quantum-computers.md":
/*!************************************************************************************************!*\
  !*** ./_clips/2018-08-02-Complexity-test-offers-new-perspective-on-small-quantum-computers.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Complexity test offers new perspective on small quantum computers\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-08-02T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/bosonsampling1-gallery.jpg?itok=bQ_YJ0bk\",\"address\":\"https://jqi.umd.edu/news/complexity-test-offers-new-perspective-on-small-quantum-computers\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Complexity test offers new perspective on small quantum computers\\noutlet: Joint Quantum Institute\\ndate_published: 2018-08-02\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/bosonsampling1-gallery.jpg?itok=bQ_YJ0bk\\naddress: https://jqi.umd.edu/news/complexity-test-offers-new-perspective-on-small-quantum-computers\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-08-02-Complexity-test-offers-new-perspective-on-small-quantum-computers.md?");

/***/ }),

/***/ "./_clips/2018-08-10-Tutorial_details_nanoscale_devices_that_couple_electric_and_magnetic_fields_via_strain.md":
/*!*********************************************************************************************************************!*\
  !*** ./_clips/2018-08-10-Tutorial_details_nanoscale_devices_that_couple_electric_and_magnetic_fields_via_strain.md ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Tutorial details nanoscale devices that couple electric and magnetic fields via strain\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-08-10T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-32/1.5050900/20180809/images/large/1.5050900.figures.online.f1.jpeg\",\"address\":\"https://doi.org/10.1063/1.5050900\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Tutorial details nanoscale devices that couple electric and magnetic fields via strain\\noutlet: American Institute of Physics\\ndate_published: 2018-08-10\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-32/1.5050900/20180809/images/large/1.5050900.figures.online.f1.jpeg\\naddress: https://doi.org/10.1063/1.5050900\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-08-10-Tutorial_details_nanoscale_devices_that_couple_electric_and_magnetic_fields_via_strain.md?");

/***/ }),

/***/ "./_clips/2018-08-28-Chaotic_recurrence_enables_a_simpler_method_for_calculating_phase_boundaries.md":
/*!***********************************************************************************************************!*\
  !*** ./_clips/2018-08-28-Chaotic_recurrence_enables_a_simpler_method_for_calculating_phase_boundaries.md ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Chaotic recurrence enables a simpler method for calculating phase boundaries\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-08-28T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-35/1.5053223/20180828/images/medium/1.5053223.figures.online.highlight_f1.jpg\",\"address\":\"https://aip.scitation.org/doi/full/10.1063/1.5053223\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Chaotic recurrence enables a simpler method for calculating phase boundaries\\noutlet: American Institute of Physics\\ndate_published: 2018-08-28\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-35/1.5053223/20180828/images/medium/1.5053223.figures.online.highlight_f1.jpg\\naddress: https://aip.scitation.org/doi/full/10.1063/1.5053223\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-08-28-Chaotic_recurrence_enables_a_simpler_method_for_calculating_phase_boundaries.md?");

/***/ }),

/***/ "./_clips/2018-09-05-Analysis_Suggests_Quantum_Simulation_as_Practical_Target_for_Early_Quantum_Computers.md":
/*!*******************************************************************************************************************!*\
  !*** ./_clips/2018-09-05-Analysis_Suggests_Quantum_Simulation_as_Practical_Target_for_Early_Quantum_Computers.md ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Analysis Suggests Quantum Simulation as Practical Target for Early Quantum Computers\",\"outlet\":\"Joint Quantum Institute\",\"image_url\":\"https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/QuICS%20art.jpg?itok=Xdk2Aw7E\",\"date_published\":\"2018-09-05T00:00:00.000Z\",\"address\":\"https://quics.umd.edu/news/analysis-suggests-quantum-simulation-practical-target-early-quantum-computers\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Analysis Suggests Quantum Simulation as Practical Target for Early Quantum Computers\\noutlet: Joint Quantum Institute\\nimage_url: https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/QuICS%20art.jpg?itok=Xdk2Aw7E\\ndate_published: 2018-09-05\\naddress: https://quics.umd.edu/news/analysis-suggests-quantum-simulation-practical-target-early-quantum-computers\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-09-05-Analysis_Suggests_Quantum_Simulation_as_Practical_Target_for_Early_Quantum_Computers.md?");

/***/ }),

/***/ "./_clips/2018-09-20-Layered_metamaterial_offers_enhanced_ultrasonic_imaging.md":
/*!**************************************************************************************!*\
  !*** ./_clips/2018-09-20-Layered_metamaterial_offers_enhanced_ultrasonic_imaging.md ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Layered metamaterial offers enhanced ultrasonic imaging\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-09-20T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-38/1.5058226/20180920/images/large/1.5058226.figures.online.f1.jpeg\",\"address\":\"https://aip.scitation.org/doi/full/10.1063/1.5058226\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Layered metamaterial offers enhanced ultrasonic imaging\\noutlet: American Institute of Physics\\ndate_published: 2018-09-20\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-38/1.5058226/20180920/images/large/1.5058226.figures.online.f1.jpeg\\naddress: https://aip.scitation.org/doi/full/10.1063/1.5058226\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-09-20-Layered_metamaterial_offers_enhanced_ultrasonic_imaging.md?");

/***/ }),

/***/ "./_clips/2018-09-21-QuICS_Workshop_Features_Experts_in_Quantum_Machine_Learning.md":
/*!******************************************************************************************!*\
  !*** ./_clips/2018-09-21-QuICS_Workshop_Features_Experts_in_Quantum_Machine_Learning.md ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"QuICS Workshop Features Experts in Quantum Machine Learning\",\"outlet\":\"Joint Quantum Institute\",\"image_url\":\"https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/quicsMAIN.JPG?itok=4v4HGhfc\",\"date_published\":\"2018-09-21T00:00:00.000Z\",\"address\":\"http://quics.umd.edu/news/quics-workshop-features-experts-quantum-machine-learning\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: QuICS Workshop Features Experts in Quantum Machine Learning\\noutlet: Joint Quantum Institute\\nimage_url: https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/quicsMAIN.JPG?itok=4v4HGhfc\\ndate_published: 2018-09-21\\naddress: http://quics.umd.edu/news/quics-workshop-features-experts-quantum-machine-learning\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-09-21-QuICS_Workshop_Features_Experts_in_Quantum_Machine_Learning.md?");

/***/ }),

/***/ "./_clips/2018-10-08-Black_holes_The_ultimate_cosmic_whisks.md":
/*!*********************************************************************!*\
  !*** ./_clips/2018-10-08-Black_holes_The_ultimate_cosmic_whisks.md ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"podcast\",\"headline\":\"Black holes&#58; The ultimate cosmic whisks\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-10-08T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/black_holes_part1_bannerbanner.jpg?itok=T6Lq7oY1\",\"address\":\"https://jqi.umd.edu/news/podcast/black-holes-ultimate-cosmic-whisks\",\"featured\":\"yes\"},\"body\":\"\",\"frontmatter\":\"type: podcast\\nheadline: Black holes&#58; The ultimate cosmic whisks\\noutlet: Joint Quantum Institute\\ndate_published: 2018-10-08\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/black_holes_part1_bannerbanner.jpg?itok=T6Lq7oY1\\naddress: https://jqi.umd.edu/news/podcast/black-holes-ultimate-cosmic-whisks\\nfeatured: yes\"}\n\n//# sourceURL=webpack:///./_clips/2018-10-08-Black_holes_The_ultimate_cosmic_whisks.md?");

/***/ }),

/***/ "./_clips/2018-10-26-Fast-flowing_electrons_may_mimic_astrophysical_dynamos.md":
/*!*************************************************************************************!*\
  !*** ./_clips/2018-10-26-Fast-flowing_electrons_may_mimic_astrophysical_dynamos.md ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Fast-flowing electrons may mimic astrophysical dynamos\",\"outlet\":\"Joint Quantum Institute\",\"date_published\":\"2018-10-26T00:00:00.000Z\",\"image_url\":\"https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/dynamo_galitski1-blue-gallery.jpg?itok=WJoRxWaS\",\"address\":\"https://jqi.umd.edu/news/fast-flowing-electrons-may-mimic-astrophysical-dynamos\",\"featured\":\"yes\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Fast-flowing electrons may mimic astrophysical dynamos\\noutlet: Joint Quantum Institute\\ndate_published: 2018-10-26\\nimage_url: https://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/dynamo_galitski1-blue-gallery.jpg?itok=WJoRxWaS\\naddress: https://jqi.umd.edu/news/fast-flowing-electrons-may-mimic-astrophysical-dynamos\\nfeatured: yes\"}\n\n//# sourceURL=webpack:///./_clips/2018-10-26-Fast-flowing_electrons_may_mimic_astrophysical_dynamos.md?");

/***/ }),

/***/ "./_clips/2018-11-21-Space_and_Time_Emerge_in_Research_of_New_QuICS_Hartree_Fellow.md":
/*!********************************************************************************************!*\
  !*** ./_clips/2018-11-21-Space_and_Time_Emerge_in_Research_of_New_QuICS_Hartree_Fellow.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"news_article\",\"headline\":\"Space and Time Emerge in Research of New QuICS Hartree Fellow\",\"outlet\":\"Joint Quantum Institute\",\"image_url\":\"https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/Cao%2C%20Charles.jpeg?itok=6mojyHZw\",\"date_published\":\"2018-11-21T00:00:00.000Z\",\"address\":\"http://quics.umd.edu/news/space-and-time-emerge-research-new-quics-hartree-fellow\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: news_article\\nheadline: Space and Time Emerge in Research of New QuICS Hartree Fellow\\noutlet: Joint Quantum Institute\\nimage_url: https://quics.umd.edu/sites/quics.umd.edu/files//styles/medium/public/Cao%2C%20Charles.jpeg?itok=6mojyHZw\\ndate_published: 2018-11-21\\naddress: http://quics.umd.edu/news/space-and-time-emerge-research-new-quics-hartree-fellow\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-11-21-Space_and_Time_Emerge_in_Research_of_New_QuICS_Hartree_Fellow.md?");

/***/ }),

/***/ "./_clips/2018-11-26-Simulations_explore_the_landscape_of_electric_order_in_bismuth_ferrite_nanoislands.md":
/*!*****************************************************************************************************************!*\
  !*** ./_clips/2018-11-26-Simulations_explore_the_landscape_of_electric_order_in_bismuth_ferrite_nanoislands.md ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"attributes\":{\"type\":\"Scilight\",\"headline\":\"Simulations explore the landscape of electric order in bismuth ferrite nanoislands\",\"outlet\":\"American Institute of Physics\",\"date_published\":\"2018-11-26T00:00:00.000Z\",\"image_url\":\"https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-48/1.5082921/20181127/images/medium/1.5082921.figures.online.f1.jpg\",\"address\":\"https://doi.org/10.1063/1.5082921\",\"featured\":\"no\"},\"body\":\"\",\"frontmatter\":\"type: Scilight\\nheadline: Simulations explore the landscape of electric order in bismuth ferrite nanoislands\\noutlet: American Institute of Physics\\ndate_published: 2018-11-26\\nimage_url: https://aip.scitation.org/na101/home/literatum/publisher/aip/journals/content/sci/2018/sci.2018.2018.issue-48/1.5082921/20181127/images/medium/1.5082921.figures.online.f1.jpg\\naddress: https://doi.org/10.1063/1.5082921\\nfeatured: no\"}\n\n//# sourceURL=webpack:///./_clips/2018-11-26-Simulations_explore_the_landscape_of_electric_order_in_bismuth_ferrite_nanoislands.md?");

/***/ }),

/***/ "./webpack/clips.js":
/*!**************************!*\
  !*** ./webpack/clips.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar context = __webpack_require__(\"./_clips sync recursive .md\");\nvar clips = function (ctx) {\n    var keys = ctx.keys();\n    var values = keys.map(ctx);\n    return keys.reduce(function (o, k, i) {\n        o[k] = values[i];\n        return o;\n    }, {});\n}(context);\n\nexports.default = clips;\n\n//# sourceURL=webpack:///./webpack/clips.js?");

/***/ })

/******/ });