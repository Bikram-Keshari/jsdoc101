"use strict";

/**
 * @author Bikram Keshari <fake-user@fake-server.com>
 * @class
 * @classdesc Creates a new Person object
 * @todo Add more details
 */
class Person {
  /**
   * The base class type
   * @private
   */
  #type = "person";
  /**
   * @constructs
   * @param {string} fullName Full name of the Person
   * @param {string} postCode Postal code of the Person
   */
  constructor(fullName, postCode) {
    this.fullName = fullName;
    this.postCode = postCode;
  }
  /**
   * Returns formatted person details
   * @public
   * @returns {string}
   */
  details() {
    return `Your base class is ${this.#type}; You are ${
      this.fullName
    } from postcode ${this.postCode}`;
  }
}

/**
 * @class
 * @extends Person
 * @classdesc Creates a new Student object
 */
class Student extends Person {
  /**
   * @constructor
   * @param {string} fullName Full name of the Student
   * @param {string} postCode Postal code of the Student
   * @param {string} id Stuent ID
   */
  constructor(fullName, postCode, id) {
    super(fullName, postCode);
    this.id = id;
  }
  /**
   * Returns formatted student details
   * @override
   * @returns {string}
   */
  details() {
    return `${super.details()} and your ID is ${this.id}`;
  }
}

/**
 * @summary A new instance of Student created and stored
 */
let bikram = new Student("Bikram", "12345", "0");
/**
 * @summary Details method called on student object and stored
 */
let bikrmDetails = bikram.details();
console.info(bikrmDetails);
