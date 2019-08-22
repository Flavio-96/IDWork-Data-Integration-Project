module.exports = {

    friendlyName: 'Job page',
  
  
    description: 'Return to the specific job page',
  
  
    inputs: {
        index: {
            description: 'Job Index',
            type: 'number',
            required: true
          },
    },
  
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/job'
      }
    },
  
  
    fn: async function ({index}) {

        let job = this.req.session.jobs['ads'][index];
  
      return {
          job: job
      };
    }
  }