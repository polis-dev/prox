package main

import (
	"context"
	"log"

	x "github.com/caddyserver/xcaddy"
)

func main() {
	builder := x.Builder{
		Compile: x.Compile{
			Cgo: false,
		},

		CaddyVersion: "master",
		Plugins: []x.Dependency{
			{
				PackagePath: "github.com/tailscale/caddy-tailscale",
				Version:     "main",
			},
		},
		Replacements: []x.Replace{},
		RaceDetector: false,
		SkipCleanup:  false,
		SkipBuild:    false,
		Debug:        false,
		BuildFlags:   "",
		ModFlags:     "",
	}

	if err := builder.Build(context.Background(), "./x"); err != nil {
		log.Fatal(err)
	}
}
