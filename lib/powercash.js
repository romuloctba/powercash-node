"use strict";

var request = require('request');


var PowerCash = function(authorization, options){

    if( !(this instanceof PowerCash) ){
        return new PowerCash(authorization, options);
    }

    if (typeof authorization !== 'object') {
      throw new Error('Authorization object not provided. Please provide { type: , name:, key: }');
    }

    if(options == undefined || typeof options.customerId !== 'string') {
      throw new Error('Customer Code not provided. Please provide options.customerId');
    }
    if(authorization.type == 'header'){
      this.headers = {};
      this.headers[authorization.name] = authorization.key;
    }

    function metodo(){
      console.log("Metodo do PowerCash");
      console.log("authorization ", authorization);
      console.log("options ", options);
    }
    //list public API calls
    this.metodo = metodo;


    //--campain
    //this.campain.list
    //this.campain.report
    //this.campain.show
    //this.campain.create
    //this.campain.update


    //--account
    //this.account.list
    //this.account.show
    //this.account.search
    //this.account.create
    //this.account.update
    //this.account.remove

    //--agent
    //this.agent.list
    //this.agent.show
    //this.agent.create
    //this.agent.update
    //this.agent.remove

    //-- branch
    //this.branch.list
    //this.branch.show
    //this.branch.create
    //this.branch.update
    //this.branch.remove

    //-- contact
    this.contact = require('./logic/contact/index')(options.customerId);
    //this.contact.listByOpportunities
    //this.contact.listByLeads
    //this.contact.list
    //this.contact.show
    //this.contact.search
    //this.contact.create
    //this.contact.update
    //this.contact.remove

    //-- dash
    //this.dash

    //--Department
    //this.department.list
    //this.department.show
    //this.department.create
    //this.department.update
    //this.department.remove


    //Email
    //this.email.list
    //this.email.show
    //this.email.create
    //this.email.update


    // -- Employees
    this.employee = require('./logic/employees/index')(options.customerId);
    //this.employee.list ok
    //this.employee.show
    //this.employee.create
    //this.employee.update
    //this.employee.remove

    //-- events
    //this.events.list
    //this.events.show
    //this.events.graphReport
    //this.events.createComment
    //this.events.do
    //this.events.removeFile
    //this.events.createFile
    //this.events.create
    //this.events.updateBodySet
    //this.events.update
    //this.events.remove

    //-- form
    //this.form.list
    //this.form.show
    //this.form.create
    //this.form.update
    //this.form.remove


    //-- landing
    //this.form.reportDemographics
    //this.form.reportAnalytics
    //this.form.list
    //this.form.create
    //this.form.update
    //this.form.show

    // -- Leads
    //this.leads.setCompleteState
    //this.leads.closed
    //this.leads.list
    //this.leads.search
    //this.leads.show
    //this.leads.create
    //this.leads.removeFile
    //this.leads.createFile
    //this.leads.update
    //this.leads.remove

    // -- leadStage
    //this.leadStage.setCurrentStage(id)
    //this.leadStage.show
    //this.leadStage.update

    // -- customerList
    //this.customerList.list
    //this.customerList.show
    //this.customerList.create
    //this.customerList.update
    //this.customerList.remove

    //-- customerOccupation
    //this.customerOccupation.list
    //this.customerOccupation.show
    //this.customerOccupation.create
    //this.customerOccupation.update
    //this.customerOccupation.remove


    //-- customerOpportunity
    //this.customerOpportunity.graphReport
    //this.customerOpportunity.setCompleteStage
    //this.customerOpportunity.closed
    //this.customerOpportunity.removeFile
    //this.customerOpportunity.createFile
    //this.customerOpportunity.list
    //this.customerOpportunity.search
    //this.customerOpportunity.show
    //this.customerOpportunity.create
    //this.customerOpportunity.update
    //this.customerOpportunity.remove

    //-- opportunityStage
    //this.opportunityStage.setCurrentStage
    //this.opportunityStage.list
    //this.opportunityStage.show
    //this.opportunityStage.update

    //-- customerOrigin
    // this.origin.list
    // this.origin.show
    // this.origin.create
    // this.origin.update
    // this.origin.remove

    //-- customerPipeline
    //this.pipeline.list
    //this.pipeline.show

    //-- pipelineStage
    //this.pipelineStage.create
    //this.pipelineStage.update
    //this.pipelineStage.remove

    //-- pipelineStageEvent
    //this.pipelineStageEvent.list
    //this.pipelineStageEvent.create
    //this.pipelineStageEvent.update
    //this.pipelineStageEvent.remove

    //-- product
    this.products = require('./logic/products/index')(options.customerId);
    //this.product.list ok
    //this.product.show
    //this.product.create
    //this.product.update
    //this.product.remove

    //--reason
    //this.reason.list
    //this.reason.show
    //this.reason.create
    //this.reason.update
    //this.reason.remove

    //--Report
    //this.reports.amountByStage
    //this.reports.pipelineAnalysis
    //this.reports.amountByStage

    //--customer
    //this.customer.list
    //this.customer.show
    //this.customer.create
    //this.customer.update
    //this.customer.remove


    //-- dash
    //this.dash.dash


    //-- dealer
    //this.dealer.list
    //this.dealer.show
    //this.dealer.create
    //this.dealer.update

    //-- gallery
    //this.gallery.list
    //this.gallery.show
    //this.gallery.create
    //this.gallery.update
    //this.gallery.remove

    //--performance
    //this.performance.pipeline

    //--support
    //this.support.list
    //this.support.show
    //this.support.create
    //this.support.update
    //this.support.remove

    //--taskActions
    //this.taskActions.listTaskActions
    //this.taskActions.list
    //this.taskActions.show
    //this.taskActions.createHistory
    //this.taskActions.update

    //-- task
    //this.task.list
    //this.task.show


    return this;
}

module.exports = PowerCash;
