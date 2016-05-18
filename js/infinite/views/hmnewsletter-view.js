(function ($, Drupal, drupalSettings, Backbone, BurdaInfinite) {

  "use strict";

  BurdaInfinite.views.HmNewsletterView = BaseView.extend({
    initialize: function (pOptions) {
      Drupal.behaviors.hmNewsletter.attach(pOptions.el.context)
      
      pOptions.el.on('newsletter:success', function(event) {
        if(typeof TrackingManager != 'undefined') {
          TrackingManager.trackEvent({category: 'newsletter', action: 'success'});
        }
      })
      pOptions.el.on('newsletter:error', function(event) {
        if (typeof TrackingManager != 'undefined') {
          TrackingManager.trackEvent({category: 'newsletter', action: 'error'});
        }
      })
    }
  });

})(jQuery, Drupal, drupalSettings, Backbone, BurdaInfinite);
