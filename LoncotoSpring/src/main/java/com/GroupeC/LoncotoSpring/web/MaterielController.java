package com.GroupeC.LoncotoSpring.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.GroupeC.LoncotoSpring.metier.Materiel;
import com.GroupeC.LoncotoSpring.repositories.MaterielRepository;;

@Controller
@RequestMapping("/loncogroup-c/materiels")

public class MaterielController {






	@Autowired
	private MaterielRepository materielRepository;
	
	@RequestMapping( method=RequestMethod.GET, 
			produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)

	@ResponseBody
	@CrossOrigin(origins= {"http://localhost:4200"}, methods= {RequestMethod.GET})
	public Page<Materiel> findAll(@PageableDefault(page=0, size=5) Pageable pr){
		return materielRepository.findAll(pr);
	}
}
