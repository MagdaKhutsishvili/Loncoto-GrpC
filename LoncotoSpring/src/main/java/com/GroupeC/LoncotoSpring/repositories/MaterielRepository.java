package com.GroupeC.LoncotoSpring.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;


import com.GroupeC.LoncotoSpring.metier.Materiel;

@RestResource
public interface MaterielRepository extends PagingAndSortingRepository<Materiel, Integer> {

}
