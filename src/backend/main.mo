import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

// No migration needed!

actor {
  type Submission = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  module Submission {
    public func compare(b1 : Submission, b2 : Submission) : Order.Order {
      switch (Text.compare(b1.name, b2.name)) {
        case (#equal) { Text.compare(b1.email, b2.email) };
        case (order) { order };
      };
    };
  };

  let submissions = Map.empty<Text, Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async () {
    switch (submissions.get(name)) {
      case (?_) { return };
      case (null) {
        let submission : Submission = {
          name;
          email;
          subject;
          message;
        };
        submissions.add(name, submission);
      };
    };
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getSubmission(name : Text) : async Submission {
    switch (submissions.get(name)) {
      case (null) { Runtime.trap("No submission found for the given name") };
      case (?submission) { submission };
    };
  };
};
