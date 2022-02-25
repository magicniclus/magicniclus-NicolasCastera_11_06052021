/**
 * @typedef {Object} homeAccomodation
 * @property {String}  title
 * @property {String}  image
 * @property {String}  id
 */


import apparts from "../data.json";

/**
 * [getList description]
 *
 * @return  {Array.<homeAccomodation>}  [return description]
 */
function getList() {
    const list = [];
    apparts.forEach(appart => {
        list.push({
            image: appart.cover,
            title: appart.title,
            id: appart.id
        })
    })
    return list;
}

function getAllList(){
    const allList = [];
    apparts.forEach(appart => {
        allList.push({
           id: appart.id,
           title: appart.title,
           cover: appart.cover,
           pictures: appart.pictures,
           description: appart.description,
           host: appart.host,
           rating: appart.rating,
           location: appart.location,
           equipment: appart.equipments,
           tags: appart.tags
        })
    })
    return allList;
}

const listForAboutPage = [
    {
        title: 'Fiabilité',
        text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    }, {
        title: 'Respect',
        text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    }, {
        title: 'Service',
        text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    }, {
        title: 'Sécurité',
        text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]


export {
    getList,
    listForAboutPage, 
    getAllList
}