// Import Capitals
var capitals = JSON.parse(JSON.stringify(capitalsData));
var population = JSON.parse(JSON.stringify(populationData));

// Find Capital
function findCapital(countryName, capitalData) {
	
	for (i = 0; i < capitalData.length; i++) {
  	if (capitalData[i].country == countryName) {
			return (capitalData[i].city);
		}
	}
	
	return ('Inconnu');
	
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function findPopulation(countryName, populationData) {
	
	for (i = 0; i < populationData.length; i++) {
  	if (populationData[i].country == countryName) {
			var population = populationData[i].population;
			population = Math.round(parseInt(population)/1000)*1000;
			return numberWithSpaces(population);
		}
	}
	
	return ('Inconnu');
	
}

// Special Description
function specialText (entry) {
	
	var text = "Je n'ai jamais été dans ce pays.";
	var visitingCountry = ['United States', 'Bahamas', 'Spain', 'Portugal', 'Italy', 'Switzerland', 'Turkey', 'Thailand', 'Cambodia'];
	if (entry == 'France') {
		text = "C'est le pays où je suis né. J'ai grandi à Chalon sur Saône jusqu'à mes 18 ans suite à quoi j'ai intégré une classe préparatoire aux grandes écoles à Besançon. À la suite des concours j'ai intégré une école d'ingénieur parisienne dont j'ai été diplômé en 2019.";
	}
	else if (entry == 'United Kingdom') {
		text = "En 2017 j'ai effectué un stage de 5 mois dans une société spécialisée dans l'impression en 3D : iMakr, et plus particulièrement au sein du comité de journalistes publiant sur le site 3D Printing Industry."
	}
	else if (entry == 'Canada') {
		text = "En 2019 je suis allé étudier à Polytechinique Montréal dans le cadre d'un échange universitaire de 6 mois. J'y ai suivi différent enseignement en lien avec l'informatique et le management.";
	}
	else if (entry == 'Vietnam') {
		text = "En 2020, je suis parti 2 mois au Vietnam pour rédiger un mémoire encadré par l'université Paris II - Panthéon ASSAS.";
	}
	else if (entry == 'Benin') {
		text = "À 18 ans je suis parti au Bénin avec une ONG nommée Afrique Pleine d'Avenir (APA) pour y dispenser des cours de mathématiques et de Français durant 1 mois et participer à la construction d'une école primaire.";
	}
	else if (visitingCountry.includes(entry)) {
		text = "J'ai visité ce pays en tant que touriste.";
	}
	
	return text;
}

$(document).ready(function() {
// Tooltip only Text
$('.country').hover(function(){
				// Hover over code
				var title = $(this).attr('data-name');
				var container = '<p><i class="fas fa-sun hour-icon"></i></span>&nbsp;10 : 30</p><br>';
				$(this).data('tipText', title).removeAttr('data-name');
				$('<p class="tooltip-country"></p>')
				.append(title)
				.appendTo('body')
				.fadeIn('slow');
				
				// Box
				// Country Name
				$('#country-name').html(title);
				// Country Flag
				var picture = 'country/svg/';
				picture += $(this).attr('data-id').toLowerCase();
				picture += '.svg';
				$('#country-picture').attr("src", picture);
				// Country Capital
				$('#country-capital').html(findCapital(title, capitals));
				// Country Population
				$('#country-population').html(findPopulation(title, population));
				// Description
				$('#country-description').html(specialText (title));
	
}, function() {
				// Hover out code
				$(this).attr('data-name', $(this).data('tipText'));
				$('.tooltip-country').remove();
}).mousemove(function(e) {
				var mousex = e.pageX + 20; //Get X coordinates
				var mousey = e.pageY + 10; //Get Y coordinates
				$('.tooltip-country')
				.css({ top: mousey, left: mousex })
});
});