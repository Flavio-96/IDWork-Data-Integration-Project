/**
 * homepage
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	friendlyName: 'Homepage action',


	description: 'Return all articles on medium and hackernoon related to the keyword searched by the user (Tag)',


	inputs: {
	},


	exits: {
		success: {
			responseType: 'view',
			viewTemplatePath: 'pages/homepage'
		},
	},



	fn: async function () {

		let recentSearches = await RecentSearches.get();

		return {
			recentSearches: recentSearches
		};
	}
};

