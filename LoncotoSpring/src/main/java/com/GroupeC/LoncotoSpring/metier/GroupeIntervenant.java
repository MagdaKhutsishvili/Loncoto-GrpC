package com.GroupeC.LoncotoSpring.metier;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
public class GroupeIntervenant {
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id				private int id;
					private String nom;
	@ManyToMany(mappedBy="groupeIntervenant")			private Intervenant intervenant;

public GroupeIntervenant(int id, String nom) {
	super();
	this.id = id;
	this.nom = nom;
}

}
