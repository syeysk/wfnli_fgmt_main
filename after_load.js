document.getElementById('managing_btn_turn').addEventListener('click', btn_click);

var cs = new ContentShower({
    navpanel: document.querySelector('.navpanel'),
    content_prefix: 'content_',
    content_active: 'managing',
    func_after_show: update_data
});

update_data('all', true);