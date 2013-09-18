describe('Button', function() {

    var list;

    before(function() {
        $('body').append($('<div id="parse-list">\
            <input class="search" />\
            <span class="sort" data-sort="name">Sort name</span>\
            <div class="list">\
                <div><span class="name">Jonny</span><span class="born">1986</span></div>\
                <div><span class="name">Jocke</span><span class="born">1985</span></div>\
            </div>\
        </div>'));

        list = new List('parse-list', {
            valueNames: ['name', 'born']
        });
    });

    after(function() {
        $('#parse-list').remove();
    });

    describe('Sort', function() {
        it('should trigger sortStart', function(done) {
            list.on('sortComplete', function() {
                done();
            });
            $('#parse-list .sort').click();
        });
        it('should trigger sortComplete', function(done) {
            list.on('sortComplete', function() {
                done();
            });
            $('#parse-list .sort').click();
        });
    });

    describe('Search', function() {
        it('should trigger searchStart', function(done) {
            list.on('searchStart', function() {
                done();
            });
            $('#parse-list .search').val('jon');
            fireKeyup($('#parse-list .search')[0]);
        });
        it('should trigger searchComplete', function(done) {
            list.on('searchComplete', function() {
                done();
            });
            $('#parse-list .search').val('jon');
            fireKeyup($('#parse-list .search')[0]);
        });
    });
});