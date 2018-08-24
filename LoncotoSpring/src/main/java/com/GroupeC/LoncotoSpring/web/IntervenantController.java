package com.GroupeC.LoncotoSpring.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.GroupeC.LoncotoSpring.metier.Intervenant;
import com.GroupeC.LoncotoSpring.repositories.IntervenantRepository;



public class IntervenantController {

	@Controller
	@RequestMapping("/loncogroup-c/intervenant")
	
	public class intervenantController {
		
		@Autowired
		
		private IntervenantRepository intervenantRepository;
		
		@RequestMapping(method=RequestMethod.GET,
				produces=MediaType.APPLICATION_JSON_UTF8_VALUE
				)
		@ResponseBody
		@CrossOrigin(origins= {"http://localhost:4200"}, methods= {RequestMethod.GET, RequestMethod.OPTIONS}) 
		public Page<Intervenant> findAll(@PageableDefault(page=0, size=5) Pageable pr) {
		
			return intervenantRepository.findAll(pr);
		}
	}
}

