/**
 * Created by Admin on 2/23/2017.
 */
(function($){
    $(document).ready(function(){
        $('.menu-position-left .menu-block, .menu-position-right .menu-block, .primary-sidebar-wrapper, .mobile-menu-w').perfectScrollbar({
            suppressScrollX: true,
            wheelPropagation: false,
            includePadding: true
        });
    })
})(jQuery);
