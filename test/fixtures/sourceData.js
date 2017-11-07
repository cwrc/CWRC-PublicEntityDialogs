const testURI = 'http://kfklsdf.com';
const anotherTestURI = 'http://shtsthr.com';

module.exports = {
    viaf: {
        people: [
            {name: 'viaf-name-1', description: 'viaf-1', id: 'viaf-Id', uri: testURI },
            {name: 'viaf-name-2', description: 'viaf-2', id: 'viaf-Id2', uri: testURI }
        ],
            places: [
            {name: 'viaf-name-3', description: 'viaf-3', id: 'viaf-Id3', uri: testURI },
            {name: 'viaf-name-4', description: 'viaf-4', id: 'viaf-Id4', uri: anotherTestURI},
            {name: 'viaf-name-5', description: 'viaf-5', id: 'viaf-Id5', uri: testURI }
        ],
            organizations: [
            {name: 'viaf-name-6', id: 'viaf-Id6', uri: testURI },
            {name: 'viaf-name-14', id: 'viaf-Id14', uri: testURI }
        ],
            titles: [
            {name: 'viaf-name-7', description: 'viaf-7', id: 'viaf-Id7', uri: testURI },
            {name: 'viaf-name-8', description: 'viaf-8', id: 'viaf-Id8', uri: testURI },
            {name: 'viaf-name-9', id: 'viaf-Id9', uri: testURI },
            {name: 'viaf-name-10', description: 'viaf-10', id: 'viaf-Id10', uri: testURI },
            {name: 'viaf-name-11', id: 'viaf-Id11', uri: testURI },
            {name: 'viaf-name-12', description: 'viaf-12', id: 'viaf-Id12', uri: testURI }
        ]
    },
    wikidata: {
        people: [
            {name: 'wikidata-name1', description: 'wikidata-1description', id: 'wikidata-Id', uri: testURI },
            {name: 'wikidata-name2', id: 'wikidata-Id2', uri: testURI }
        ],
            places: [
            {name: 'wikidata-name3', description: 'wikidata-description3', id: 'wikidata-Id3', uri: testURI },
            {name: 'wikidata-name4',  id: 'wikidata-Id4', uri: anotherTestURI}
        ],
            organizations: [
            {name: 'wikidata-name6', description: 'wikidata-description6', id: 'wikidata-Id6', uri: testURI }
        ],
            titles: [
            {name: 'wikidata-name7', description: 'wikidata-description7', id: 'wikidata-Id7', uri: testURI },
            {name: 'wikidata-name8', description: 'wikidata-description8', id: 'wikidata-Id8', uri: testURI },
            {name: 'wikidata-name9', description: 'wikidata-description9', id: 'wikidata-Id9', uri: testURI },
            {name: 'wikidata-name12', description: 'wikidata-description12', id: 'wikidata-Id12', uri: testURI }
        ]
    },
    getty: {
        people: [
            {name: 'getty-name1', description: 'getty-description1', id: 'getty-Id', uri: testURI },
            {name: 'getty-name2', description: 'getty-description2', id: 'getty-Id2', uri: testURI }
        ],
            places: [
            {name: 'getty-name3',  id: 'getty-Id3', uri: testURI }
        ]
    },
    dbpedia: {
        people: [
            {name: 'dbpedia-name1', description: 'dbpedia-1description', id: 'dbpedia-Id', uri: testURI },
            {name: 'dbpedia-name2', id: 'dbpedia-Id2', uri: testURI }
        ],
        places: [
            {name: 'dbpedia-name3', description: 'dbpedia-description3', id: 'dbpedia-Id3', uri: testURI },
            {name: 'dbpedia-name4',  id: 'dbpedia-Id4', uri: anotherTestURI}
        ],
        organizations: [
            {name: 'dbpedia-name6', description: 'dbpedia-description6', id: 'dbpedia-Id6', uri: testURI },
            {name: 'dbpedia-name13', description: 'dbpedia-description18', id: 'dbpedia-Id55', uri: testURI },
            {name: 'dbpedia-name66', description: 'dbpedia-description66', id: 'dbpedia-Id66', uri: testURI }

        ],
        titles: [
            {name: 'dbpedia-name7', description: 'dbpedia-description7', id: 'dbpedia-Id7', uri: testURI },
            {name: 'dbpedia-name8', description: 'dbpedia-description8', id: 'dbpedia-Id8', uri: testURI },
            {name: 'dbpedia-name9', description: 'dbpedia-description9', id: 'dbpedia-Id9', uri: testURI },
            {name: 'dbpedia-name12', description: 'dbpedia-description12', id: 'dbpedia-Id12', uri: testURI }
        ]
    }
}