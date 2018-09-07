package com.GroupeC.LoncotoSpring.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;


import com.GroupeC.LoncotoSpring.metier.Materiel;

@RestResource
public interface MaterielRepository extends PagingAndSortingRepository<Materiel, Integer> {
	
	
	
	@Query("select i from Materiel i where i.client.id = :idclient")
	public Page<Materiel> findByClient_Id(@Param("idclient") int idclient, Pageable pr);
}
