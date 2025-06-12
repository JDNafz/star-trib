type AuthorType = string[]; //multiple authors or just one?

interface Article {
	title: string;
	subtitle: string;
	author?: AuthorType;//tbd on implementing its use
	date?: string;//tbd on implementing its use
	body: string;
}
export const snippet: string = `Trump said Tuesday that in his first term he waited for governors to call in the military for riot response and “they didn’t want to do it.”`
export const exampleArticle: Article = {
	title: `Trump and cabinet officials cite Minneapolis riots, Walz’s response to justify troops in Los Angeles`,
	subtitle: `Trump said Tuesday that in his first term he waited for governors to call in the military for riot response and “they didn’t want to do it.”`,
	body: `LOS ANGELES — Dozens of mayors from across the Los Angeles region banded together Wednesday to demand that the Trump administration stop the stepped-up immigration raids that have spread fear across their cities and sparked protests across the U.S.

But there were no signs President Donald Trump would heed their pleas.

About 500 of the National Guard troops deployed to the Los Angeles protests have been trained to accompany agents on immigration operations, the commander in charge said Wednesday. And while some troops have already gone on such missions, he said it's too early to say if that will continue even after the protests die down.

''We are expecting a ramp-up,'' said Maj. Gen. Scott Sherman said, noting that protests across the nation were being discussed. ''I'm focused right here in LA, what's going on right here. But you know, I think we're, we're very concerned.''

A demonstration in Los Angeles' civic center Wednesday evening just before the second night of the city's downtown curfew was set to start, suddenly turned chaotic, as police in riot gear — many on horseback — charged at a group, striking them with wooden rods and pushing them out of a park in front of City Hall. Officers also fired crowd control projectiles, striking at least one young woman, who writhed in pain on the ground as she bled from her hip.

It wasn't clear what initiated the confrontation. But minutes earlier, some protesters had lit fireworks as they approached the federal building, the site of numerous showdowns in recent nights. Simultaneously, a larger portion of the protest had been in the midst of a dance party.

''It was chill the whole time, it was cool vibes, peaceful protesting,'' said Raymond Martinez. ''Once we got by the federal building the horses started coming."

The LA-area mayors and city council members urged Trump to stop using armed military troops alongside immigration agents during the raids.


''I'm asking you, please listen to me, stop terrorizing our residents,'' said Brenda Olmos, vice mayor of Paramount, who said she was hit by rubber bullets over the weekend. ''You need to stop these raids.''

Speaking alongside the other mayors at a news conference, Los Angeles Mayor Karen Bass said the raids spread fear at the behest of the White House. The city's nightly curfew that started Tuesday will remain in effect as long as necessary in a 1-square-mile (2.5-square-kilometer) section of downtown. The city of Los Angeles encompasses roughly 500 square miles (1,295 square kilometers).

''If there are raids that continue, if there are soldiers marching up and down our streets, I would imagine that the curfew will continue,'' Bass said.

Under pressure from Trump, ICE ramps up arrests: ‘You’re not going to stop us’
Those who have been caught up in the nationwide raids include asylum seekers, people who overstayed their visas and migrants awaiting their day in immigration court.

The administration has cited the protests in its decision to deploy the military. Referring to the demonstrations, which have been mostly concentrated in the LA business district, the Democratic mayor added: ''If you drive a few blocks outside of downtown, you don't know that anything is happening in the city at all.''

California's Democratic governor, Gavin Newsom, has asked a federal court to put an emergency stop to the military helping immigration agents in the nation's second-largest city. This week, guardsmen began standing protectively around agents as they carry out arrests. A judge set a hearing for Thursday.


The Trump administration called the lawsuit a ''crass political stunt endangering American lives" in its official response on Wednesday.

The military is now closer to engaging in law enforcement actions such as deportations, as Trump has promised in his crackdown. The Guard has the authority to temporarily detain people who attack officers, but any arrests must be made by law enforcement.

The president posted on the Truth Social platform that the city ''would be burning to the ground'' if he had not sent in the military.

Some 2,000 National Guard soldiers are in Los Angeles, and are soon to be joined by 2,000 more along with about 700 Marines, Sherman said.

Speaking in an interview with The Associated Press and ABC, Sherman initially said that National Guard troops had already temporarily detained civilians in the Los Angeles protests over immigration raids. He later said he based his comments on photos and footage he had seen that turned out not to be a representation of Guard members in Los Angeles.

LA curfew will continue in downtown


Police detained more than 20 people, mostly on curfew violations, on the first night of the curfew and used crowd-control projectiles to break up hundreds of protesters.

But there were fewer clashes than on previous nights, and by daybreak, the downtown streets were bustling with residents walking dogs and commuters clutching coffee cups.

Los Angeles police have made nearly 400 arrests and detentions since Saturday, the vast majority of which were for failing to leave the area at the request of law enforcement, according to the police department.

There have been a handful of more serious charges, including for assault against police officers and for possession of a Molotov cocktail and a gun. Nine police officers have been hurt, mostly with minor injures. Some were transported to a hospital and released.

Protests have spread nationwide

Demonstrations have also spread to other cities nationwide, including Dallas and Austin in Texas, and Chicago and New York, where thousands rallied and more arrests were made.


In New York City, police said they took 86 people into custody during protests in lower Manhattan that lasted into Wednesday morning. Police Commissioner Jessica Tisch said the majority of demonstrators were peaceful.

A 66-year-old woman in Chicago was injured when she was struck by a car during downtown protests Tuesday evening, police said. Video showed a car speeding down a street where people were protesting.

In Texas, where police in Austin used chemical irritants to disperse several hundred demonstrators Monday, Republican Gov. Greg Abbott's office said Texas National Guard troops were ''on standby" in areas where demonstrations are planned.

Guard members were sent to San Antonio, but Police Chief William McManus said he had not been told how many troops were deployed or their role ahead of planned protests Wednesday night and Saturday. Officers with the Texas Department of Public Safety said the Texas National Guard was present at a protest downtown.

The protests began Friday after federal immigration raids arrested dozens of workers in Los Angeles. Protesters blocked a major freeway and set cars on fire over the weekend, and police responded with tear gas, rubber bullets and flash-bang grenades.

Thousands of people have peacefully rallied outside City Hall and hundreds more protested outside a federal complex that includes a detention center where some immigrants are being held following workplace raids.

___

This story has been corrected. The commander of the troops deployed to Los Angeles initially told the AP that National Guard members had already detained some civilians. He later said his information was incorrect and Guard members have not detained civilians. This story also corrects a quote that was misattributed to Mayor Jessica Ancona of El Monte. It was said by Brenda Olmos, vice mayor of Paramount.

___

Taxin reported from Orange County, California. Seewer reported from Toledo, Ohio. Associated Press writers Julie Watson in San Diego, Jesse Bedayn in Denver, Jim Vertuno in Austin, Texas, and Hallie Golden in Seattle contributed to this report`
}