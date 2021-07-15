const apiResponse = [
    {
      "user_id": 4681,
      "tour_id": 46,
      "tour_availibility_id": 2483620,
      "start_at": "2021-05-28 13:30:00",
      "end_at": "2021-05-28 16:30:00",
      "total_no_persons": 0,
      "first_name": "",
      "last_name": "",
      "email": "",
      "phone": "",
      "created_date": "2021-05-26T12:01:04.000Z",
      "modified_date": "2021-05-26T12:01:04.000Z",
      "additional_personal_info": null,
      "phone_number": null,
      "country_code": null,
      "hotel_pickup_address": null,
      "hotel_pickup_adress": null,
      "hotel_pickup_addres": null,
      "booking_id": 537,
      "capacity": 10,
      "customer_type_rates": [
          {
              "customer_prototype": {
                  "note": "Ages 12+ | NON-REFUNDABLE TICKET",
                  "pk": 1028170,
                  "total": 7149,
                  "display_name": "Adult NON-Refundable",
                  "total_including_tax": 7506
              },
              "total": 7149,
              "capacity": 10,
              "minimum_party_size": null,
              "custom_field_instances": [],
              "customer_type": {
                  "note": "Ages 12+ | NON-REFUNDABLE TICKET",
                  "pk": 239303,
                  "plural": "Adult - NON-Refundable",
                  "singular": "Adult NON-Refundable"
              },
              "maximum_party_size": null,
              "pk": 2564696377,
              "total_including_tax": 7506
          },
          {
              "customer_prototype": {
                  "note": "Ages 12+ | REFUNDABLE TICKET",
                  "pk": 1028171,
                  "total": 7649,
                  "display_name": "Adult Refundable",
                  "total_including_tax": 8031
              },
              "total": 7649,
              "capacity": 10,
              "minimum_party_size": null,
              "custom_field_instances": [],
              "customer_type": {
                  "note": "Ages 12+ | REFUNDABLE TICKET",
                  "pk": 449953,
                  "plural": "Adult - Refundable",
                  "singular": "Adult Refundable"
              },
              "maximum_party_size": null,
              "pk": 2564696378,
              "total_including_tax": 8031
          },
          {
              "customer_prototype": {
                  "note": "For up to 6 People",
                  "pk": 1095174,
                  "total": 67200,
                  "display_name": "Private Group",
                  "total_including_tax": 70560
              },
              "total": 67200,
              "capacity": 1,
              "minimum_party_size": 1,
              "custom_field_instances": [
                  {
                      "pk": 4314169,
                      "custom_field": {
                          "modifier_type": "none",
                          "description": "",
                          "title": "How many people will be in your group?",
                          "booking_notes_safe_html": "",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "booking_notes": "",
                          "offset": 0,
                          "pk": 890426,
                          "percentage": 0,
                          "is_required": false,
                          "type": "count",
                          "is_always_per_customer": false,
                          "name": "Private Tour Person Count"
                      }
                  },
                  {
                      "pk": 4314285,
                      "custom_field": {
                          "modifier_type": "none",
                          "description": "Any additional notes or requests?",
                          "title": "Comments/Questions",
                          "booking_notes_safe_html": "",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "<p>Any additional notes or requests?</p>",
                          "booking_notes": "",
                          "offset": 0,
                          "pk": 485389,
                          "percentage": 0,
                          "is_required": false,
                          "type": "long",
                          "is_always_per_customer": false,
                          "name": "Comments"
                      }
                  }
              ],
              "customer_type": {
                  "note": "For up to 6 People",
                  "pk": 241808,
                  "plural": "Private Group",
                  "singular": "Private Group"
              },
              "maximum_party_size": 1,
              "pk": 2564696379,
              "total_including_tax": 70560
          }
      ],
      "custom_field_instances": [
          {
              "pk": 3702533,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "Vegetarian, Nut Allergy, Shellfish Allergy, Gluten-Free (non-Celiac)\n\n**NOTE:** If you do not eat red meat and / or pork, please select \"Vegetarian\" for this experience.",
                  "title": "Please check here if any guests in your party would like to be accommodated for one of the the following restrictions ONLY:",
                  "booking_notes_safe_html": "",
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "<p>Vegetarian, Nut Allergy, Shellfish Allergy, Gluten-Free (non-Celiac)</p>\n<p><strong>NOTE:</strong> If you do not eat red meat and / or pork, please select &quot;Vegetarian&quot; for this experience.</p>",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 495758,
                  "percentage": 0,
                  "is_required": false,
                  "type": "yes-no",
                  "is_always_per_customer": false,
                  "name": "Dietary Restrictions Checkbox - South End"
              }
          },
          {
              "pk": 3702535,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "**Please select this option for any guests who do not eat red meat and / or pork*",
                  "title": "Please select the number of guests who are vegetarian",
                  "booking_notes_safe_html": "",
                  "extended_options": [
                      {
                          "name": "0",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579891,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "1",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579892,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "2",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579893,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "3",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579894,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "4",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579895,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "5",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579896,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "6",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579897,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "7",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579898,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "8",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579899,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "9",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579900,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "10",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579901,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "11",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579902,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "12",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579903,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "13",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579904,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "14",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579905,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "15",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579906,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "16",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579907,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      }
                  ],
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "<p>*<em>Please select this option for any guests who do not eat red meat and / or pork</em></p>",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 578923,
                  "percentage": 0,
                  "is_required": true,
                  "type": "extended-option",
                  "is_always_per_customer": false,
                  "name": "Vegetarian Count"
              }
          },
          {
              "pk": 3702538,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "",
                  "title": "Please select the number of severe nut allergies in your party?",
                  "booking_notes_safe_html": "",
                  "extended_options": [
                      {
                          "name": "0",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579876,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "1",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579874,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "2",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579875,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "3",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579877,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "4",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579878,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "5",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579879,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "6",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579880,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "7",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579881,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "8",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579882,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "9",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579883,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "10",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579884,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "11",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579885,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "12",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579886,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "13",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579887,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "14",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579888,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "15",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579889,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "16",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579890,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      }
                  ],
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 578920,
                  "percentage": 0,
                  "is_required": true,
                  "type": "extended-option",
                  "is_always_per_customer": false,
                  "name": "Nut Allergy Count"
              }
          },
          {
              "pk": 3702540,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "",
                  "title": "Please tell us which nuts to avoid:",
                  "booking_notes_safe_html": "",
                  "extended_options": [
                      {
                          "name": "Peanut Allergy",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122625,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Tree Nut Allergy",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122626,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "All Nuts",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122627,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      }
                  ],
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 633325,
                  "percentage": 0,
                  "is_required": true,
                  "type": "extended-option",
                  "is_always_per_customer": false,
                  "name": "Nut Allergy Detail"
              }
          },
          {
              "pk": 3702542,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "",
                  "title": "Please select the number of guests with a shellfish allergy",
                  "booking_notes_safe_html": "",
                  "extended_options": [
                      {
                          "name": "0",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579908,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "1",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579909,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "2",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579910,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "3",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579911,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "4",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579912,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "5",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579913,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "6",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579914,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "7",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579915,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "8",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579916,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "9",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579917,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "10",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579918,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "11",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579919,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "12",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579920,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "13",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579921,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "14",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579922,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "15",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579923,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "16",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5579924,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      }
                  ],
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 578926,
                  "percentage": 0,
                  "is_required": true,
                  "type": "extended-option",
                  "is_always_per_customer": false,
                  "name": "Shellfish/Seafood Allergy Count"
              }
          },
          {
              "pk": 3702544,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "",
                  "title": "Please select the number of gluten free (non-Celiac) guests in your party?",
                  "booking_notes_safe_html": "",
                  "extended_options": [
                      {
                          "name": "0",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122460,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "1",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122461,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "2",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122462,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "3",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122463,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "4",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122464,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "5",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122465,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "6",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122466,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "7",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122467,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "8",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122468,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "9",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122469,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "10",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122470,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "11",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122471,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "12",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122472,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "13",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122473,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "14",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122474,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "15",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122475,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "16",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6122476,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      }
                  ],
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 633291,
                  "percentage": 0,
                  "is_required": true,
                  "type": "extended-option",
                  "is_always_per_customer": false,
                  "name": "Gluten Free Count"
              }
          },
          {
              "pk": 3702547,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "(Including preference, Under 21, pregnant, etc.)",
                  "title": "How many people in your party do NOT drink alcohol?",
                  "booking_notes_safe_html": "",
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "<p>(Including preference, Under 21, pregnant, etc.)</p>",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 495951,
                  "percentage": 0,
                  "is_required": false,
                  "type": "count",
                  "is_always_per_customer": false,
                  "name": "No Alcohol"
              }
          },
          {
              "pk": 3702549,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "",
                  "title": "Are you celebrating a birthday or other special occasion?",
                  "booking_notes_safe_html": "",
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 495773,
                  "percentage": 0,
                  "is_required": false,
                  "type": "yes-no",
                  "is_always_per_customer": false,
                  "name": "Special Occasion"
              }
          },
          {
              "pk": 3702550,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "",
                  "title": "Tell us more about your special occasion!",
                  "booking_notes_safe_html": "",
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 485418,
                  "percentage": 0,
                  "is_required": false,
                  "type": "long",
                  "is_always_per_customer": false,
                  "name": "Special Occasion Details"
              }
          },
          {
              "pk": 3702551,
              "custom_field": {
                  "modifier_type": "adjust",
                  "description": "Please select # desired. These will be packaged to take home with you.",
                  "title": "Would you like to add a celebratory surprise to your order?",
                  "booking_notes_safe_html": "",
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "<p>Please select # desired. These will be packaged to take home with you.</p>",
                  "booking_notes": "",
                  "offset": 1000,
                  "pk": 495927,
                  "percentage": 0,
                  "is_required": false,
                  "type": "count",
                  "is_always_per_customer": false,
                  "name": "Celebratory Surprise"
              }
          },
          {
              "pk": 3702552,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "",
                  "title": "How did you hear about us?",
                  "booking_notes_safe_html": "",
                  "extended_options": [
                      {
                          "name": "Google / Internet search",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 4657946,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Friend / Family Member",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 6025086,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Chronicle",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5132519,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "TripAdvisor",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 4657945,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Yelp",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 4657944,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Facebook",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 4657947,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Instagram",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 4657948,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Twitter",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 4657949,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "The Boston Calendar",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5132520,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "TV/Radio",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5132525,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Article",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5132668,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Merrimack Valley Magazine",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5132667,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Gift",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5132666,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Concierge",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5132665,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Nift",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5132664,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "I've been on your tours before!",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5132811,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Other",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 5580754,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      }
                  ],
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 485392,
                  "percentage": 0,
                  "is_required": true,
                  "type": "extended-option",
                  "is_always_per_customer": false,
                  "name": "How did you hear about us?"
              }
          },
          {
              "pk": 3702553,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "",
                  "title": "Other",
                  "booking_notes_safe_html": "",
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 579016,
                  "percentage": 0,
                  "is_required": true,
                  "type": "short",
                  "is_always_per_customer": false,
                  "name": "How Did You Hear About Us - Other"
              }
          },
          {
              "pk": 3711386,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "In the interest of keeping all transactions contactless, we are offering the option to include gratuity for your guide at time of booking. Thank you for your consideration!",
                  "title": "Tour Guide Gratuity",
                  "booking_notes_safe_html": "",
                  "extended_options": [
                      {
                          "name": "15% Gratuity",
                          "is_taxable": false,
                          "modifier_kind": "percentage",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 7041436,
                          "percentage": 15,
                          "modifier_type": "adjust",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "20% Gratuity",
                          "is_taxable": false,
                          "modifier_kind": "percentage",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 7041437,
                          "percentage": 20,
                          "modifier_type": "adjust",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "25% Gratuity",
                          "is_taxable": false,
                          "modifier_kind": "percentage",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 7259119,
                          "percentage": 25,
                          "modifier_type": "adjust",
                          "is_always_per_customer": false,
                          "description": ""
                      },
                      {
                          "name": "Other Amount",
                          "is_taxable": false,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 7041438,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      }
                  ],
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "<p>In the interest of keeping all transactions contactless, we are offering the option to include gratuity for your guide at time of booking. Thank you for your consideration!</p>",
                  "booking_notes": "",
                  "offset": 0,
                  "pk": 868199,
                  "percentage": 0,
                  "is_required": false,
                  "type": "extended-option",
                  "is_always_per_customer": false,
                  "name": "Tour Guide Gratuity"
              }
          },
          {
              "pk": 3711387,
              "custom_field": {
                  "modifier_type": "adjust",
                  "description": "",
                  "title": "Select the custom gratuity from the dropdown below:",
                  "booking_notes_safe_html": "",
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "",
                  "offset": 100,
                  "pk": 868200,
                  "percentage": 0,
                  "is_required": false,
                  "type": "count",
                  "is_always_per_customer": false,
                  "name": "Custom Gratuity"
              }
          },
          {
              "pk": 3702558,
              "custom_field": {
                  "modifier_type": "none",
                  "description": "",
                  "title": "Thanks For Booking - See You Soon!",
                  "booking_notes_safe_html": "<h1>Meeting Location:</h1>\n<p>Orinoco South End<br>\n477 Shawmut Ave.<br>\nBoston, MA 02118</p>\n<h1>Directions to Orinoco South End:</h1>\n<p>Click <a href=\"https://g.page/orinoco-a-latin-kitchen?share\">Here</a><br>\nFor Directions </p>\n<p>It is recommended that you take a look at your directions prior to heading out to ensure that you know how long it will take to get there.  If you are using an app for directions, please ONLY use the link provided here!</p>\n<hr>",
                  "extended_options": [
                      {
                          "name": "Thanks For Booking - See You Soon!",
                          "is_taxable": true,
                          "modifier_kind": "offset",
                          "description_safe_html": "",
                          "offset": 0,
                          "pk": 7034651,
                          "percentage": 0,
                          "modifier_type": "none",
                          "is_always_per_customer": false,
                          "description": ""
                      }
                  ],
                  "is_taxable": true,
                  "modifier_kind": "offset",
                  "description_safe_html": "",
                  "booking_notes": "#Meeting Location: \nOrinoco South End\n477 Shawmut Ave.\nBoston, MA 02118\n\n#Directions to Orinoco South End:\n\nClick [Here](https://g.page/orinoco-a-latin-kitchen?share)\nFor Directions \n\nIt is recommended that you take a look at your directions prior to heading out to ensure that you know how long it will take to get there.  If you are using an app for directions, please ONLY use the link provided here!\n\n___________________________________",
                  "offset": 0,
                  "pk": 864817,
                  "percentage": 0,
                  "is_required": true,
                  "type": "extended-option",
                  "is_always_per_customer": false,
                  "name": "Orinoco South End Email Notes"
              }
          }
      ]
  }
  ];


const filteredArray = () => {
    var result = apiResponse.map((e) => e.custom_field_instances.filter((e) => {
        return ![3702533,3702558].includes(e.pk) }
      ))
      
      console.log(result);
}


nestedFilter = (targetArray, filters) => {
    var filterKeys = Object.keys(filters);
    return targetArray.filter(function (eachObj) {
      return filterKeys.every(function (eachKey) {
        if (!filters[eachKey].length) {
          return true; 
        }
        return filters[eachKey].includes(eachObj[eachKey]);
     });
 });
};

const otherArray = [2548823,2656878,1414057,2642253,3857607,3857608,
    3857609,3857610,3857612,2405061,2602628,3022482,2859716,
    2859717,3336611,3554652,271188,888293,1465242,1681792,2039711,3057037,
    3057038,3057039,2229775,2303201,3314010,3563508,1044759,1357534,876729,2624358,2854948,2752992,
    2388179,2473371,2473372,2473373,2473374,2473375,73772,3775259,2807351,1899777,2244867,2244868,
    2501452,3855203,3855204,4195536,2549330,557834,3855217,2201613,97384,789663,688757,4223195 
    ]
  