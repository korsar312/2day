function form_open(){
	if (form_open_q == false){
		let new_div = document.createElement('div')		//������� �ﯠ
		let back_bady = document.createElement('div')		//������
		let form = document.createElement('form')		//�ଠ
		let name = document.createElement('div')
		let form_name = document.createElement('input')
		let form_adres = document.createElement('input')
		let form_kvartira = document.createElement('input')	//� ���� ��� ��� �� ���� :3
		let form_room = document.createElement('input')
		let form_prise = document.createElement('input')
		let form_tel = document.createElement('input')
		let form_done = document.createElement('button')

		let bady = document.body				
		 
		new_div.className = 'create_form'			//����� ��� ���
		back_bady.className = 'back_create_form'		//����� ��� �������
		form.className = 'form'					//����� ��� ���
		form.id = 'forma'	
		form_done.className = 'button_done'
		back_bady.onclick = function() {form_close()}		//���� ��� ������� ��� �������


		form_name.setAttribute('placeholder','������ ��� ���')
		form_name.setAttribute('name','name')

		form_adres.setAttribute('placeholder','������ ���� ���')
		form_adres.setAttribute('name','adres')

		form_kvartira.setAttribute('placeholder','������ ���-�� ������ � ���')
		form_kvartira.setAttribute('name','kvartira')

		form_room.setAttribute('placeholder','������ ��/� ���')
		form_room.setAttribute('name','room')

		form_prise.setAttribute('placeholder','������ 業� �� ������ � ���')
		form_prise.setAttribute('name','prise')
		
		form_tel.setAttribute('placeholder','������ ⥫�䮭 ��������')
		form_tel.setAttribute('name','tel')

		form_done.setAttribute('name','Done')
		form_done.setAttribute('form','forma')
		form_done.setAttribute('value','antibug')
		form_done.setAttribute('type','button')
		form_done.onclick = function() {add_item()}
		form_done.innerText = '�������� ���� ���'

		name.className = 'form_prop prop_name'
		name.textContent = '���������� �����������'
		form_name.className = 'form_prop'
		form_adres.className = 'form_prop'
		form_kvartira.className = 'form_prop'
		form_room.className = 'form_prop'
		form_prise.className = 'form_prop'
		form_tel.className = 'form_prop'

		bady.append(back_bady)					
		bady.append(new_div)

		let el1 = document.getElementsByClassName('create_form')
		let el2 = document.getElementsByClassName('form')
		el1[0].append(form)
		el2[0].append(name)
		el2[0].append(form_name)
		el2[0].append(form_adres)
		el2[0].append(form_kvartira)
		el2[0].append(form_room)
		el2[0].append(form_prise)
		el2[0].append(form_tel)
		el2[0].append(form_done)
		
		form_open_q = true
	}
}
function form_close(){
	form_open_q = false
	let el1 = document.getElementsByClassName('create_form')
	let el2 = document.getElementsByClassName('back_create_form')
	
	el1[0].remove()
	el2[0].remove()

}
function add_item(){
	let form = document.forms[0]
	let all_ride = true
	
	let arr = []
	for(let i of form){
		if (!i.value == ''){
			arr.push(i.value)
		}
		else{
			all_ride = false
			break
		}
	}
	if (all_ride){
		
		let item_id = Math.round(Math.random()*1000000000000)
		while(id_arr.includes(item_id,0)){
			item_id = Math.round(Math.random()*1000000000000)
		}
		id_arr.push(item_id)

		let name_item = new Item(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5], item_id)		
		item_temp_arr.push(name_item)		
		item_arr.push(name_item)
		
		push_DOM_item()		
	}
	else{alert('�������� �� �������')}

}
function Item(name, adres, kvartira, room, prise, tel, item_id){
	this.name = name
	this.adres = adres
	this.kvartira = kvartira
	this.room = room
	this.tel = tel
	this.prise_i_kv_a = Math.round(prise/120)
	this.prise = prise
	this.prise_i_all_a = Math.round((prise*room/120)*('1.' + kvartira))
	this.prise_i_all_b = Math.round((prise*room)*('1.' + kvartira))
	this.item_id = item_id
}
function push_DOM_item(){
	let el_main = document.getElementById('main')
	
	while (el_main.firstChild){
		el_main.firstChild.remove() 
	}
	
	for(let i in item_temp_arr){
		if(item_temp_arr.length == 0){break}

		let add_div = document.createElement('div')

		add_div.className = 'item'

		let item_i = document.createElement('div')
		let item_m = document.createElement('div')

		item_m.className = 'item_map'
		item_i.className = 'item_prop'

		let name_i = document.createElement('div')
		let adres_i = document.createElement('div')
		let kvartira_i = document.createElement('div')
		let room_i = document.createElement('div')
		let prise_i = document.createElement('div')
		let prise_i_all_a = document.createElement('div')
		let prise_i_kv_a = document.createElement('div')
		let prise_i_all_b = document.createElement('div')
		let prise_i_kv_b = document.createElement('div')
		let tel = document.createElement('div')

		let del = document.createElement('button')
		let id_i = document.createElement('div')

		name_i.className = 'item_name'
		adres_i.className = 'item_adres item_property'
		kvartira_i.className = 'item_room item_property'
		room_i.className = 'item_square item_property'
		prise_i.className = 'item_prise item_property'
		prise_i_all_a.className = 'item_prise_all_a item_property'
		prise_i_kv_a.className = 'item_prise_kv_a item_property'
		prise_i_all_b.className = 'item_prise_all_b item_property'
		prise_i_kv_b.className = 'item_prise_kv_b item_property'
		tel.className = 'item_tel item_property'

		del.className = 'item_del'
		id_i.className = 'id_i item_property'

		name_i.innerText = item_temp_arr[i].name
		adres_i.innerText = '����:                                ' + item_temp_arr[i].adres
		kvartira_i.innerText = '���-�� ������:                     ' + item_temp_arr[i].kvartira
		room_i.innerText = '���-�� ��/�:                           ' + item_temp_arr[i].room
		tel.innerText = '����䮭:                         		   ' + item_temp_arr[i].tel
		
		prise_i_all_a.innerText = '���� �� 1��/� �� �७��:       ' + item_temp_arr[i].prise_i_kv_a
		prise_i_kv_a.innerText = '���� �� ������� �� �७��:     ' + item_temp_arr[i].prise_i_all_a
		prise_i.innerText = '���� �� 1��/� �� ���㯪�:            ' + item_temp_arr[i].prise
		prise_i_kv_b.innerText = '���� �� ������� �� ���㯪�:    ' + item_temp_arr[i].prise_i_all_b

		del.innerText =        '������� ���'
		del.onclick = function() {form_remove(this)}	
		id_i.innerText =       item_temp_arr[i].item_id

		el_main.prepend(add_div)
		el_main.firstChild.append(item_i)
		el_main.firstChild.append(item_m)		
		el_main.firstChild.firstChild.append(name_i)
		el_main.firstChild.firstChild.append(adres_i)
		el_main.firstChild.firstChild.append(kvartira_i)
		el_main.firstChild.firstChild.append(room_i)
		el_main.firstChild.firstChild.append(prise_i)		//������塞 ��ப� ���!!!!
		el_main.firstChild.firstChild.append(prise_i_all_a)
		el_main.firstChild.firstChild.append(prise_i_kv_a)
		el_main.firstChild.firstChild.append(prise_i_kv_b)
		el_main.firstChild.firstChild.append(prise_i_all_b)
		el_main.firstChild.firstChild.append(tel)
	


		el_main.firstChild.firstChild.append(del)
		
		
		el_main.firstChild.firstChild.append(id_i)			//��᫥����!!!!
	}
	lots()
	add_cookie()
}
function form_remove(el){
	for(let i in item_temp_arr){
		if (el.parentElement.lastChild.innerText == item_temp_arr[i].item_id){
			item_temp_arr.splice(i, 1) 
			break
		}
	}

	for(let i in item_arr){
		if (el.parentElement.lastChild.innerText == item_arr[i].item_id){
			item_arr.splice(i, 1) 
			break
		}
	}
	
	push_DOM_item()
}
function refresh_DOM_item(){
	item_temp_arr = []
	for(let i in item_arr){
		item_temp_arr.push(item_arr[i]) 
	}

	push_DOM_item()
}
function seach(){
	let el = document.getElementById('search')
	let search_fined = el.value
	
	refresh_DOM_item()

	for(let i in item_arr){
		if (item_arr[i].name.includes(search_fined, 0)){}
		else if (item_arr[i].adres.includes(search_fined, 0)){}
		else if (item_arr[i].tel.includes(search_fined, 0)){}

		else{
			for(let a in item_temp_arr){
				if (item_arr[i].item_id == item_temp_arr[a].item_id){
					item_temp_arr.splice(a, 1) 
					push_DOM_item()
					break
				}
			}
		}
	}
	
}
function lots(){
	let number = document.getElementById('number')
	
	while (number.firstChild){
		number.firstChild.remove() 
	}

	let add_span = document.createElement('span')
	add_span.innerText = item_temp_arr.length
	
	number.append(add_span)
}
function slide(){
	let el = document.getElementById('sort')
	el.classList.toggle('slide_on')
}
function sort(par){
	switch(par){
		case 'for_name':
			item_temp_arr.sort( function(a, b){
			let nameA = a.name.toLowerCase()
			let nameB = b.name.toLowerCase()
			if(nameA<nameB){return -1}
			if(nameA>nameB){return 1}
			return 0
			} );
			item_temp_arr.reverse()
			push_DOM_item()
			break
		case 'for_adres':
			item_temp_arr.sort( function(a, b){
			let nameA = a.adres.toLowerCase()
			let nameB = b.adres.toLowerCase()
			if(nameA<nameB){return -1}
			if(nameA>nameB){return 1}
			return 0
			} );
			item_temp_arr.reverse()
			push_DOM_item()
			break
		case 'for_room':
			item_temp_arr.sort( (a, b)=>(a.kvartira - b.kvartira) );
			item_temp_arr.reverse()
			push_DOM_item()
			break
		case 'for_kvartira':
			item_temp_arr.sort( (a, b)=>(a.room - b.room) );
			item_temp_arr.reverse()
			push_DOM_item()
			break
		case 'for_prise_b_1':
			item_temp_arr.sort( (a, b)=>(a.prise_i_all_a - b.prise_i_all_a) );
			item_temp_arr.reverse()
			push_DOM_item()
			break
		case 'for_prise_a_1':
			item_temp_arr.sort( (a, b)=>(a.prise_i_kv_a - b.prise_i_kv_a) );
			item_temp_arr.reverse()
			push_DOM_item()
			break
		case 'for_prise_b_all':
			item_temp_arr.sort( (a, b)=>(a.prise - b.prise) );
			item_temp_arr.reverse()
			push_DOM_item()
			break
		case 'for_prise_a_all':
			item_temp_arr.sort( (a, b)=>(a.prise_i_all_b - b.prise_i_all_b) );
			item_temp_arr.reverse()
			push_DOM_item()
			break
	}
}
function add_cookie(){
	let cookier = ''
	for(let i in item_arr){
		cookier += 
		item_arr[i].name + ',' + 
		item_arr[i].adres + ',' +
		item_arr[i].kvartira + ',' +
		item_arr[i].room + ',' +
		item_arr[i].prise + ',' +
		item_arr[i].item_id + ':'
	}
	String(cookier)
	document.cookie = `item=${cookier}`
}



let cookier =[]		//��� �㪮�
let item_arr = [];	//���ᨢ, � ���஬ ᯨ᮪
let item_temp_arr = [];	//���ᨢ, �� ���஬� ��⠢����� ���஢��
let id_arr = [];	//���ᨢ, c 㭨����묨 id
let form_open_q = false


