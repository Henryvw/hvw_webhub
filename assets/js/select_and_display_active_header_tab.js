var url_path_name = window.location.pathname;
var url_path_name = url_path_name.replace(/\//g,"");
var url_path_name = url_path_name.replace(/_/g," ");

select_and_display_active_header_tab = function() {
      all_li_items = Array.from(document.querySelectorAll('li'));
      nav_tabs = all_li_items.filter(li => li.classList.contains("nav-item"));
      nav_tabs.forEach(li => {
        li.childNodes[1].classList.remove("active");
      });

      current_li_element = all_li_items.find(tab => tab.innerText === url_path_name);
      current_li_element.childNodes[1].classList.add("active");
}

select_and_display_active_header_tab(url_path_name) 
