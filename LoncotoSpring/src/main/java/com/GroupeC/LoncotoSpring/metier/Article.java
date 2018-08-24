package com.GroupeC.LoncotoSpring.metier;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString(exclude= {"famille"})
@Entity
public class Article {
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id private int id;
    private String nom;
    private String marque;
    @ManyToOne	private Catalogue catalogue;
    @OneToMany(mappedBy="article",
			 fetch=FetchType.EAGER) private Set<Materiel> lesmateriels;
	
	
	
	public Set<Materiel> getLesmateriels() {
		if ( lesmateriels == null) {
			 lesmateriels = new HashSet<>();
		}
		return  lesmateriels;
	}
	





    

    private LocalDate dateCreation;
    /*
    @ManyToOne private Famille famille;
    
    public Article(int id, String nom, String marque, LocalDate dateCreation, Famille famille)
    {this.id = id; this.nom = nom; this.marque = marque; this.dateCreation = dateCreation; this.famille = famille;}

    public Article(int id, String nom, String marque, LocalDate dateCreation)
    {this.id = id; this.nom = nom; this.marque = marque; this.dateCreation = dateCreation;}
    */
}



