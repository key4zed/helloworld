/**
 * ### Раздел интерфейса _Отчеты_
 * Содержит список отчетов
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

$p.iface.view_rep = function (cell) {

	function OViewReports(){

		var t = this,
			frm_attr = {
				bind_pwnd: true,
				set_text: function (text) {
					cell.setText({text: "<b>" + text + "</b>"});
				}
			};

		// показывает форму списка
		function show_report(obj){

			cell.setText({text: "Отчеты"});

			// если форму еще не рисовали
			if(!t.report)
				t.report = $p.rep[obj].form_rep(t._cell, frm_attr);

			else if(t.report._mgr != $p.rep[obj]){
				t.report.close();
				t._cell.detachObject(true);
				t.report = $p.rep[obj].form_rep(t._cell, frm_attr);
			}
		}


		// обработчик маршрутизации url
		function hash_route(hprm) {

			if(hprm.view == "rep"){

				var obj = hprm.obj ? hprm.obj.split(".")[1] : t.default_obj;

				if($p.md.get_classes().rep.indexOf(obj) == -1){
					$p.iface.set_hash("rep." + t.default_obj);
					return;
				}

				show_report(obj);

				return false;
			}

			return true;

		}

		// сюда попадаем после всех приготовлений - можно рисовать форму отчета
		function go_go(){

			$p.off(go_go);

			setTimeout(function () {
				hash_route($p.job_prm.parse_url());
			});
		}

		// Рисуем дополнительные элементы навигации
		t.tb_nav = $p.iface.btns_nav(cell.cell.querySelector(".dhx_cell_sidebar_hdr"));


		// Если отчетов к показу больше 1, layout с деревом и списком иначе - просто список
		if($p.md.get_classes().rep.reduce(function (sum, name) {
				if(!$p.md.get("rep."+name).hide){
					if(!t.default_obj)
						t.default_obj = name;
					return sum+=1;
				}
			}, 0) > 1){

			t.meta_objs = new $p.iface.All_meta_objs(cell, ["rep"], frm_attr);
			t._cell = t.meta_objs.layout.cells("b");

		}else{
			if(t.default_obj)
				t._cell = cell;
			else
				return;
		}


		// Дожидаемся инициализации констант
		if($p.job_prm.properties)
			setTimeout(go_go);
		else
			$p.on({ predefined_elmnts_inited: go_go });


		/**
		 * Обработчик маршрутизации
		 * @param hprm
		 * @return {boolean}
		 */
		$p.on("hash_route", hash_route);

	}

	return $p.iface._reports || ($p.iface._reports = new OViewReports());

};
