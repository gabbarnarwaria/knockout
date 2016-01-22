var Developer = function (first, last) {
    var self = this;
    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);
    self.fullName = ko.pureComputed(function () {
        return self.firstName() + " " + self.lastName();
    });
}


var Bug = function (description) {
    var self = this;
    self.description = ko.observable(description);
    self.status = ko.observable();
    self.assignedTo = ko.observable();
    self.dateClosed = ko.observable();
}