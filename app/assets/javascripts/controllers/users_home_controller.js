angular.module('standupApp').controller('UsersHomeController', ["getBulbsService", function(getBulbsService) {

    this.message = 'in UsersHomeController';

    this.score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    this.bulb={
      bright: '',
      dim: '',
      blocked: '',
      panic_score: '',
    };

    this.getPanicScore = function(score) {
        this.bulb.panic_score = score;
    };

    this.createBulb = function(brightBulb, dimBulb, blocker) {
        $.ajax({
          type: 'POST',
          url: 'home',
          data: this.bulb,
          success: function() {
            // do something?
          }
        });
    };

    this.scrollStats = function() {
        $('html, body').animate({
            scrollTop: $(".statsContainer").offset().top
        }, 500);
    };

    this.scrollHist = function() {
        $('html, body').animate({
            scrollTop: $(".histContainer").offset().top
        }, 500);
    };

    this.scrollTop = function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    };

    var self = this;

    var history = getBulbsService.getHist();

    self.getHistory = function() {
      history.then(function(response) {
        console.log(response);
        self.bulbHist = response;
        // self.parseTime(self.bulbHist);
      });
    };

    // self.allTimes = [];
    //
    // self.parseTime = function(response) {
    //   response.forEach(function(item) {
    //     self.bulb.time = item.created_at;
    //     self.allTimes.push(self.bulb.time);
    //   });
    // };

    self.getHistory();
}]);
