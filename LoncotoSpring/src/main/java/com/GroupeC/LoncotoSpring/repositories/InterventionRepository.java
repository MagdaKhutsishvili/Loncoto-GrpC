package com.GroupeC.LoncotoSpring.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.GroupeC.LoncotoSpring.metier.Intervention;
import com.GroupeC.LoncotoSpring.metier.Materiel;

public interface InterventionRepository extends PagingAndSortingRepository<Intervention, Integer> {

	
	public List<Intervention> findAll();
}
