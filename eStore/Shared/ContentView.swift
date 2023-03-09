//
//  ContentView.swift
//  Shared
//
//  Created by Amit Kumar on 01/11/21.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Welcome to eStore: A SRP")
            .padding();
        Text("The GenX SRP").padding();
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            ContentView()
                .preferredColorScheme(.light)
           
        }
    }
}
