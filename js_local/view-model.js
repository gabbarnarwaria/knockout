var appViewModel = function () {
    var self = this;
    self.developers = ko.observableArray([]);
    self.bugs = ko.observableArray([]);

    self.isModifyDeveloper = false;
    self.currentDeveloper = ko.observable(new Developer());
    self.saveDeveloper = function () {
        if (!self.isModifyDeveloper) {
            self.developers.unshift(self.currentDeveloper())
        }
        self.currentDeveloper(new Developer());
        self.isModifyDeveloper = false;
    }
    self.modifyDeveloper = function (developer) {
        self.currentDeveloper(developer);
        self.isModifyDeveloper = true;
    }
}

ko.applyBindings(new appViewModel());