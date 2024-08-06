import React from "react";
import Accordion from "../components/Accordion";

const Terms = () => {
  return (
    <div>
      <h1 className="my-2 text-center text-3xl font-medium">
        Terms & Conditions
      </h1>
      <p className="mx-2 mb-5 text-center text-lg sm:mx-auto sm:w-1/2">
        By proceeding with your purchase, you acknowledge that you have read,
        understood, and agreed to these terms and conditions.
      </p>
      <Accordion
        place="top"
        title="Legal and Liability Disclaimer"
        content={
          <p className="rounded border-x-2 border-black px-4">
            <span className="text-lg font-medium">User Responsibility</span>:
            The user assumes full responsibility for the safe use of this kit.
            The manufacturer or seller is not liable for any injury, damage, or
            loss resulting from the use of this kit.
            <br />
            <span className="text-lg font-medium">Safety Compliance</span>
            : Ensure compliance with local regulations and safety standards.
            Follow all safety instructions to mitigate risks. <br />
            <span className="text-lg font-medium">Waiver of Liability</span>: By
            using this kit, the user acknowledges and accepts that the
            manufacturer or seller will not be responsible for any accidents,
            injuries, or damages that may occur during use. Users are encouraged
            to follow all safety guidelines and exercise caution at all times.
          </p>
        }
      />
      <Accordion
        title="Product Use and Return Policy"
        place="top"
        content={
          <p className="rounded border-x-2 border-black px-4">
            <span className="text-lg font-medium">Non-Returnable</span>: Please
            note that this kit is non-returnable. Once purchased, the product
            cannot be returned or exchanged. Ensure that you review all
            components and instructions before making a purchase.
            <br />
            <span className="text-lg font-medium">Age Restriction</span>
            : This kit is intended for users aged 16 and above. It contains
            small parts and electronic components that may pose a risk to
            younger individuals. Parental supervision is required for users
            under 16 years of age.
            <br />
          </p>
        }
      />
      <Accordion
        title="Legal Disclaimer and Safety Notice"
        place="top"
        content={
          <p className="mb-4 rounded border-x-2 border-black px-4">
            <span className="text-lg font-medium">
              Product Sourcing and Manufacturer Disclaimer
            </span>
            : The components included in this kit are sourced from various
            manufacturers. We are not the manufacturers of these individual
            parts and cannot guarantee the quality or performance of each
            component beyond its described specifications. Each component is
            included based on its suitability for inclusion in the kit and is
            subject to the original manufacturer's terms and conditions.
            <br />
            <span className="text-lg font-medium">
              Liability and Responsibility
            </span>
            : By purchasing and using this kit, you acknowledge that we, as the
            kit assembler, are not liable for any damages, injuries, or losses
            that may occur as a result of the use, misuse, or improper handling
            of the components. Our responsibility is limited to the assembly and
            provision of the kit, and we assume no liability for defects or
            issues with the individual components.
            <br />
            <span className="text-lg font-medium">
              Safety and Usage Guidelines
            </span>
            : It is essential to follow the safety instructions provided with
            the kit. Improper use, handling, or modification of the components
            can result in accidents or injuries. Always use components as
            directed and adhere to safety guidelines to minimize risk.
            <br />
            <span className="text-lg font-medium">Age Restriction</span>: This
            kit is not suitable for individuals under the age of 16. Adult
            supervision is required for younger users to ensure safe handling
            and use of the components.
            <br />
            <span className="text-lg font-medium">Non-Returnable Policy</span>:
            Please be aware that this kit is sold as-is and is non-returnable.
            No refunds will be issued for the kit or any individual components.
            Ensure that you have reviewed all product details and instructions
            before purchase.
            <br />
            <span className="text-lg font-medium">Warranty and Support</span>:
            The kit does not come with a warranty for the individual components.
            Any issues or defects related to the components must be addressed
            with the original manufacturers, not with us. We provide support for
            kit assembly and general inquiries but are not responsible for
            component-specific issues.
            <br />
            <span className="text-lg font-medium">
              Compliance and Safety Standards
            </span>
            : While we strive to include components that comply with safety and
            quality standards, we do not provide certifications or guarantees
            for compliance. Users are responsible for ensuring that all
            components are used in accordance with local regulations and safety
            standards.
            <br />
            <span className="text-lg font-medium">Contact Information</span>:
            For any questions or support regarding the kit, please contact us at
            (insert contact information). We are available to assist with
            general inquiries and provide guidance on kit assembly.
            <br />
            <span className="text-lg font-medium">Disposal Instructions</span>:
            Dispose of electronic components and batteries responsibly,
            following local environmental regulations.
          </p>
        }
      />
    </div>
  );
};

export default Terms;
