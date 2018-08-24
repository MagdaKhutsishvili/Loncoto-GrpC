package com.GroupeC.LoncotoSpring.metier;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity

public class Intervenant {
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id				private int id;
					private String nom;
					private String prenom;
					private String email;
					
@OneToMany(mappedBy="intervenant")		private Intervention intervention;

@ManyToMany 					private GroupeIntervenant groupeIntervenant;

public Intervenant(int id, String nom, String prenom, String email) {
	super();
	this.id = id;
	this.nom = nom;
	this.prenom = prenom;
	this.email = email;
}
	

}
