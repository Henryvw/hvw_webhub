var url_path_name = window.location.pathname;
var url_path_name = url_path_name.replace(/\//g,"");
var url_path_name = url_path_name.replace(/_/g," ");

colorize_the_active_tab = function() {
grab_all_list_items_and_clear_past_active_status();
set_current_tab_to_active(url_path_name);
}

grab_all_list_items_and_clear_past_active_status = function() {
      all_li_items = Array.from(document.querySelectorAll('li'));
      nav_tabs = all_li_items.filter(li => li.classList.contains("nav-item"));
      nav_tabs.forEach(li => {
        li.childNodes[1].classList.remove("active");
      });
  nav_tabs
}

set_current_tab_to_active = function() {
      current_li_element = all_li_items.find(tab => tab.textContent.trim() === url_path_name);
      current_li_element.childNodes[1].classList.add("active");
}

colorize_the_active_tab(url_path_name)

//Congratulations! You just experienced A Tasty Helping of Custom Henry van Wagenberg Javascript Functions
