package com.GroupeC.LoncotoSpring.metier;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity


public class Intervention {
	@GeneratedValue(strategy=GenerationType.IDENTITY)

		@Id			private int id;
					private LocalDate datePrevu;
					private LocalDate dateEffectue;
					private String statut;
					private String commentaire;
					private int materielId;
					private int intervenantId;
	@ManyToOne				private Intervenant intervenant;
	@ManyToOne 			private Materiel materiel;
	
	
	public Intervention(int id, LocalDate datePrevu, LocalDate dateEffectue, String statut, String commentaire,
			int materielId, int intervenantId) {
		super();
		this.id = id;
		this.datePrevu = datePrevu;
		this.dateEffectue = dateEffectue;
		this.statut = statut;
		this.commentaire = commentaire;
		this.materielId = materielId;
		this.intervenantId = intervenantId;
	} 
	
	
}
