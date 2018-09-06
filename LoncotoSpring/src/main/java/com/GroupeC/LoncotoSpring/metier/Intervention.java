package com.GroupeC.LoncotoSpring.metier;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

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
	@Temporal(TemporalType.DATE)			private Date datePrevu;
	@Temporal(TemporalType.DATE)			private Date dateEffectue;
					private String statut;
					private String commentaire;
	@ManyToOne				private Intervenant intervenant;
	@ManyToOne 			private Materiel materiel;
	@Temporal(TemporalType.DATE)			private Date start;
	@Temporal(TemporalType.DATE)			private Date end;
											private String title;
	
	public Intervention(int id, Date datePrevu, Date dateEffectue, String statut, String commentaire,
			int materielId, int intervenantId) {
		super();
		this.id = id;
		this.datePrevu = datePrevu;
		this.dateEffectue = dateEffectue;
		this.statut = statut;
		this.commentaire = commentaire;
		
	} 
	
	
}
