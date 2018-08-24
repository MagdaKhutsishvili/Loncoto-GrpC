package com.GroupeC.LoncotoSpring.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.GroupeC.LoncotoSpring.metier.Intervention;

public interface InterventionRepository extends PagingAndSortingRepository<Intervention, Integer> {

}
