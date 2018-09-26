/**
 * ### Модуль менеджера и документа Перемещение денег
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 *
 * @module doc_cash_moving
 * Created 28.07.2016
 */


// Подписываемся на события
$p.doc.cash_moving.on({

	/**
	 * Обработчик перед записью документа
	 */
	before_save: function (attr) {

		// как минимум, одна касса должна быть заполнена
		if(this.sender.empty() && this.recipient.empty()){

			$p.msg.show_msg({
				title: $p.msg.mandatory_title,
				type: "alert-error",
				text: $p.msg.mandatory_one_cashbox
			});

			return false
		}

	}
});