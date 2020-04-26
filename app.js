const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('fs');

const url = "https://www.teamsportia.se/produktkategori/cykel/klassiska-cyklar/damcyklar/";
const url1 = "https://www.teamsportia.se/produktkategori/cykel/barncyklar/barncyklar-20/";
const url2 = "https://www.teamsportia.se/produktkategori/cykel/mountainbike-mtb/";


function kollaPris(URL,typ){
    request(URL, function (err, res, body) { // Ladd in sidan
        if(err)
        {
            console.log(err, "error loading page");
        }
        else
        {
            console.log('\n',typ);
            let $ = cheerio.load(body);  // Ladda hela sidan

            // För värje listelement
            $('.site-main ul.products.columns-3 li.product').each(function(index){
                const name = $(this).find('h2').text();     // Hitta Namn
                const price = $(this).find('span.woocommerce-Price-amount').text(); //Hitta Pris
                console.log('Namn: ',name,' Pris:', price);
            });
        }
    });
}

 typ = 'Damcyklar:';
kollaPris(url, typ);
typ = 'Barncyklar:';
kollaPris(url1, typ);
typ = 'Mountainbike:';
kollaPris(url2, typ);
