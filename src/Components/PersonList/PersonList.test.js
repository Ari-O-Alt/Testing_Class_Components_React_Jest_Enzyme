import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

// --- we create a test suite for this component (PersonList)
describe("PersonList", () => {
  // --- test that checks if the PersonList component is rendered and it it contains an unordered list
  it("renders an UL element", () => {
    const getPersonListWrapper = shallow(<PersonList />);
    const peopleListUls = getPersonListWrapper.find("ul");

    expect(peopleListUls).toHaveLength(1); // we expect to find just one list since find returns an collection
  });

  // --- test that checks if no list items are displayed when people array pop is empty
  it("displays no LIs", () => {
    const getPersonListWrapper = shallow(<PersonList people={[]} />);
    const peopleInTheList = getPersonListWrapper.find("li"); // returns an collection

    expect(peopleInTheList).toHaveLength(0);
  });

  // --- test that checks if one list item is displayed when people array pop has an item
  it("displays one LIs", () => {
    const getPersonListWrapper = shallow(
      <PersonList people={[{ name: "Alan" }]} />
    );
    const peopleInTheList = getPersonListWrapper.find("li"); // returns a collection

    expect(peopleInTheList).toHaveLength(1);
  });

  // --- test that checks if the number of list items displayed is equal to the lenght of the "people" array
  it("displays all LIs", () => {
    const getPersonListWrapper = shallow(
      <PersonList
        people={[{ name: "Alan" }, { name: "Jane" }, { name: "Mary" }]}
      />
    );
    const peopleInTheList = getPersonListWrapper.find("li"); // returns a collection

    expect(peopleInTheList).toHaveLength(peopleInTheList.length);
  });

  // --- test that checks if the people's names are displayed on the screen
  it("it renders the first name of a person", () => {
    const people = [{ name: "Alan" }];
    const getPersonListWrapper = shallow(<PersonList people={people} />);
    const personListItems = getPersonListWrapper.find("li"); // returns a collection
    expect(personListItems.at(0).text()).toContain(people[0].name); // checks if the first LI of the collection displays the first name of the first item of the people array
  });
});
