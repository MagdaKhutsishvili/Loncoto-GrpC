package com.GroupeC.LoncotoSpring.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.GroupeC.LoncotoSpring.metier.Intervenant;
import com.GroupeC.LoncotoSpring.metier.Intervention;
import com.GroupeC.LoncotoSpring.repositories.InterventionRepository;


@Controller
@RequestMapping("/loncogroup-c/interventions")

public class InterventionController {

	@Autowired
	
	private InterventionRepository interventionRepository;
	
	@RequestMapping(method=RequestMethod.GET,
			produces=MediaType.APPLICATION_JSON_UTF8_VALUE
			)
	@ResponseBody
	@CrossOrigin(origins= {"http://localhost:4200"}, methods= {RequestMethod.GET, RequestMethod.OPTIONS}) 
	public Page<Intervention> findAll(@PageableDefault(page=0, size=5) Pageable pr) {
	
		return interventionRepository.findAll(pr);
	}
	
	@RequestMapping(value="/{lid:[0-9]+}", method=RequestMethod.GET,
			produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	@CrossOrigin(origins= {"http://localhost:4200"}, methods= {RequestMethod.GET, RequestMethod.GET})
	public Intervention findclientById(@PathVariable("lid") int lid) {
			return interventionRepository.findOne(lid) ;
	}
	
	
	
	@RequestMapping(value="/save",method=RequestMethod.PUT,produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	@CrossOrigin(origins = {"http://localhost:4200"}, methods = {RequestMethod.PUT})
	
	public Intervention updateClient(@RequestBody Intervention i) {
		System.out.println(i);
		return interventionRepository.save(i);
	
	}
	
	@RequestMapping(value="/save",method=RequestMethod.POST,produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	@CrossOrigin(origins = {"http://localhost:4200"}, methods = {RequestMethod.POST})
	
	public Intervention saveIntervention(@RequestBody Intervention i) {
		return interventionRepository.save(i);
	}
	
	
	@RequestMapping(value="/remove/{id:[0-9]+}",method=RequestMethod.DELETE,produces=org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	@CrossOrigin(origins = {"http://localhost:4200"}, methods = {RequestMethod.DELETE})
	public Map<String, String> removeIntervention(@PathVariable("id") int id) {
		interventionRepository.delete(id);
		HashMap<String, String> result = new HashMap<>();
		result.put("intervention_deleted_id", "" + id);
		return result;
	}
	
	
	
	
	
	
	
	
	
}

