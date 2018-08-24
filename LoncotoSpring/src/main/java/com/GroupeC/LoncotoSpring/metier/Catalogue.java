package com.GroupeC.LoncotoSpring.metier;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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

public class Catalogue {
	@GeneratedValue(strategy=GenerationType.IDENTITY)
				@Id	private int id;
					private int articleId;
@OneToMany(mappedBy="catalogue")      private Article article;

public Catalogue(int id, int articleId) {
	super();
	this.id = id;
	this.articleId = articleId;
}


}
