package com.GroupeC.LoncotoSpring.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.GroupeC.LoncotoSpring.metier.Client;
import com.GroupeC.LoncotoSpring.repositories.ClientRepository;

@Controller
@RequestMapping("/loncogroup-c/clients")

public class ClientController {





	@Autowired
	private ClientRepository clientRepository;
	
	@RequestMapping( method=RequestMethod.GET, 
			produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)

	@ResponseBody
	@CrossOrigin(origins= {"http://localhost:4200"}, methods= {RequestMethod.GET})
	public Page<Client> findAll(@PageableDefault(page=0, size=5) Pageable pr){
		return clientRepository.findAll(pr);
	}
	
	
	@RequestMapping(value="/{lid:[0-9]+}", method=RequestMethod.GET,
			produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	@CrossOrigin(origins= {"http://localhost:4200"}, methods= {RequestMethod.GET, RequestMethod.OPTIONS})
	public Page<Client> findclientById(@PathVariable("lid") int lid, @PageableDefault(page=0, size=5) Pageable pr) {
		Page<Client> lapage=  new PageImpl<>(
				clientRepository.findOne(lid),
				pr,
				lapage.getTotalElements());
			return lapage;
	}
}
